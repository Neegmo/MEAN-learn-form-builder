export interface InputField {
  type: 'text' | 'textArea' | 'dropdown';
  label: string;
  placeholder: string;
  formControlName: string;
  value: string;
  options?: string[];
}
