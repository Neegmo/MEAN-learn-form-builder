import { Component, inject } from '@angular/core';
import { FormContainerComponent } from '../../components/form-container/form-container.component';
import { FormDetails } from '../../interfaces/form-details';
import { FormFactoryComponent } from '../../components/form-factory/form-factory.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormFactoryComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);
  formDetails: FormDetails = {
    title: 'Login',
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
    ],
    button: {
      title: 'login',
      icon: 'ionLogIn',
    },
  };

  loginSuccessful() {
    console.log('Successful');
    this.router.navigate(['/']);
  }
}
