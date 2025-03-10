import { FieldType } from '../enums/field-type.enum';

export interface SurveyField {
  title: string;
  details: string;
  type: FieldType;
  options: string[];
}
