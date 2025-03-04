import { Injectable, inject } from '@angular/core';
import { InputField } from '../interfaces/input-field';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  formBuilder = inject(FormBuilder);
  generateFormGroup(formFields: InputField[]) {
    const formGroup: any = {};
    formFields.forEach((field) => {
      formGroup[field.formControlName] = [''];
    });
    return this.formBuilder.group(formGroup);
  }
}
