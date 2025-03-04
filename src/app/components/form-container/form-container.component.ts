import { Component } from '@angular/core';
import { FormFactoryComponent } from '../form-factory/form-factory.component';
import { InputField } from '../../interfaces/input-field';
@Component({
  selector: 'app-form-container',
  imports: [FormFactoryComponent],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.css',
})
export class FormContainerComponent {
  formFields: InputField[] = [
    {
      type: 'text',
      label: 'Name',
      placeholder: 'Enter your name',
      formControlName: 'name',
      value: '',
    },
    {
      type: 'text',
      label: 'Email',
      placeholder: 'Enter your email',
      formControlName: 'email',
      value: '',
    },
    {
      type: 'text',
      label: 'Phone',
      placeholder: 'Enter your phone',
      formControlName: 'phone',
      value: '',
    },
    {
      type: 'dropdown',
      label: 'Workplace',
      placeholder: 'Enter your workplace',
      formControlName: 'workplace',
      value: '',
      options: ['Home', 'Work', 'Mobile'],
    },
    {
      type: 'textArea',
      label: 'Message',
      placeholder: 'Enter your message',
      formControlName: 'message',
      value: '',
    },
  ];
}
