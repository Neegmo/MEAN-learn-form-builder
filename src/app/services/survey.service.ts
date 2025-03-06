import { Injectable, signal } from '@angular/core';
import { FormDetails } from '../interfaces/form-details';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  surveys = new BehaviorSubject<any>([
    {
      title: 'test',
      description: 'test',
    },
  ]);

  updateSurveys(survey: any) {
    // this.surveys.update((value: any[]) => {
    //   return [...value, survey];
    // });
    console.log('SURVEYS UPDATED');
  }

  getSurveys() {
    // return this.surveys();
  }
}
