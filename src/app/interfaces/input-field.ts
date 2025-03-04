export interface InputField {
  type: 'text' | 'textArea' | 'dropdown';
  label: string;
  placeholder: string;
  formControlName: any;
  value: string;
  options?: string[];
}
