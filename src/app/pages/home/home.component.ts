import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { SurveyListItemComponent } from '../../components/survey-list-item/survey-list-item.component';
import { SurveyService } from '../../services/survey.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FieldType } from '../../enums/field-type.enum';
import { SurveyData } from '../../interfaces/survey-data';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-home',
  imports: [SurveyListItemComponent, CommonModule, NgIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  surveyList: any = signal([]);
  surveysService = inject(SurveyService);
  router = inject(Router);
  subscription: Subscription[] = [];

  ngOnInit() {
    // console.log('SURVEYS: ', this.surveysService.getSurveys());
    this.getSurveys();
  }

  ngOnDestroy() {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

  getSurveys() {
    this.subscription.push(
      this.surveysService.surveys.subscribe((value) => {
        this.surveyList.set(value);
      })
    );
    console.log('FORM: ', this.surveyList());
    console.log('TITLE: ', this.surveyList()[0].info);
  }

  addNewSurvey() {
    const newEmptySurvey: SurveyData = {
      info: {
        title: '',
        description: '',
      },
      fields: [],
    };
    this.surveysService.surveys.next([...this.surveyList(), newEmptySurvey]);
    this.router.navigate(['/edit-survey', this.surveyList().length - 1]);
  }

  editSurvey(index: number) {
    this.router.navigate(['/edit-survey', index]);
  }

  removeSurvey(index: number) {
    this.surveyList.update((value: any[]): any => {
      const tempArray = [...value];
      tempArray.splice(index, 1);
      return tempArray;
    });
    this.surveysService.surveys.next(this.surveyList());
  }

  previewSurvey(index: number) {
    this.router.navigate(['/public/preview-survey', index]);
  }
}
