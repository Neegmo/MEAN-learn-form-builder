import { Component } from '@angular/core';
import { FormContainerComponent } from '../../components/form-container/form-container.component';
import { FormDetails } from '../../interfaces/form-details';
import { FormFactoryComponent } from '../../components/form-factory/form-factory.component';

@Component({
  selector: 'app-register',
  imports: [FormFactoryComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  formDetails: FormDetails = {
    title: 'Register',
    fields: [
      {
        type: 'text',
        label: 'Email',
        placeholder: 'Enter your email',
        formControlName: 'email',
        value: '',
      },
      {
        type: 'text',
        label: 'Password',
        placeholder: 'Enter your password',
        formControlName: 'password',
        value: '',
      },
      {
        type: 'text',
        label: 'Repeat password',
        placeholder: 'Enter your password again',
        formControlName: 'repeatPasswrod',
        value: '',
      },
    ],
    button: {
      title: 'login',
      icon: 'ionLogIn',
    },
  };
}
