import { SurveyField } from './survey-field';
import { SurveyInfo } from './survey-info';

export interface SurveyData {
  info: SurveyInfo;
  fields?: SurveyField[];
}
