import { FormListItem } from './form-list-item';
import { FormButton } from './form-button';
import { InputField } from './input-field';

export interface FormDetails {
  title?: string;
  description?: string;
  fields: InputField[];
  button?: FormButton;
}
