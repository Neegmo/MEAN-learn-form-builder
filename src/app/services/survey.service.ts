import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FieldType } from '../enums/field-type.enum';
import { SurveyField } from '../interfaces/survey-field';
import { SurveyData } from '../interfaces/survey-data';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  surveys = new BehaviorSubject<SurveyData[]>([
    {
      info: {
        title: 'test title',
        description:
          'test description that should representa a shord description of a form',
      },
      fields: [
        {
          title: 'first input',
          details: 'first input description',
          type: FieldType.TEXT,
          options: [],
        },
        {
          title: 'second input',
          details: 'second input description',
          type: FieldType.DROPDOWN,
          options: ['1', '2', '3'],
        },
      ],
    },
  ]);
}
