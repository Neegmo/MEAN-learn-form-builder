import {
  Component,
  inject,
  Input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { WidgetFormTitleAndDescriptionComponent } from '../../components/widget-form-title-and-description/widget-form-title-and-description.component';
import { WidgetCreateFieldComponent } from '../../components/widget-create-field/widget-create-field.component';
import { SurveyService } from '../../services/survey.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyData } from '../../interfaces/survey-data';
import { SurveyInfo } from '../../interfaces/survey-info';
import { SurveyField } from '../../interfaces/survey-field';
import { ButtonComponent } from '../../components/ui/button/button.component';

@Component({
  selector: 'app-form-edit',
  imports: [
    WidgetFormTitleAndDescriptionComponent,
    WidgetCreateFieldComponent,
    ButtonComponent,
  ],
  templateUrl: './survey-edit.component.html',
  styleUrl: './survey-edit.component.css',
})
export class SurveyEditComponent implements OnInit {
  details: WritableSignal<SurveyInfo> = signal({
    title: '',
    description: '',
  });
  fields: WritableSignal<SurveyField[]> = signal([]);
  surveysService = inject(SurveyService);
  router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  surveyIndex!: number;

  ngOnInit(): void {
    // console.log('ID PARAM: ', this.route.snapshot.params['id']);
    this.surveyIndex = +this.route.snapshot.params['id'];
    this.getFiledInfo();
  }

  getFiledInfo() {
    const currentSurvey: SurveyData =
      this.surveysService.surveys.value[this.surveyIndex];
    this.details.set(currentSurvey.info);
    this.fields.set(currentSurvey.fields || []);
    console.log('FIELDS: ', this.fields());
  }

  addField() {
    this.fields.update((value: any[]): any => {
      return [
        ...value,
        {
          title: new Date().toISOString(),
          description: '',
          type: '',
          options: [],
        },
      ];
    });
    console.log('FIELDS: ', this.fields());
  }

  removeField(index: number) {
    this.fields.update((value: any[]): any => {
      const tempArray = [...value];
      tempArray.splice(index, 1);
      return tempArray;
    });
  }

  updateField(filedIndex: number, fieldValue: any) {
    this.fields.update((value: any[]) => {
      return value.map((item, index) =>
        index === filedIndex ? fieldValue : item
      );
    });
    console.log('FIELDS: ', this.fields());
  }

  updateDetails(values: any) {
    this.details.set(values);
    console.log(this.details());
  }

  saveSurvey() {
    const prev = this.surveysService.surveys.value;
    const newSurvey = {
      info: {
        title: this.details().title,
        description: this.details().description,
      },
      fields: this.fields(),
    };
    console.log('NEW SURVEY: ', newSurvey);
    this.surveysService.surveys.next(
      prev.map((item: any, index: any) =>
        index === this.surveyIndex ? newSurvey : item
      )
    );

    // this.surveysService.surveys.next([...prev, newSurvey]);
    this.router.navigate(['/']);
  }
}
