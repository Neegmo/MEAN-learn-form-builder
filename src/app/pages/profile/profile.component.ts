import { Component, inject } from '@angular/core';
import { FormDetails } from '../../interfaces/form-details';
import { Router } from '@angular/router';
import { FormFactoryComponent } from '../../components/form-factory/form-factory.component';

@Component({
  selector: 'app-profile',
  imports: [FormFactoryComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  router = inject(Router);
  formDetails: FormDetails = {
    title: 'Profile',
    fields: [
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
        label: 'Password',
        placeholder: 'Enter your password',
        formControlName: 'password',
        value: '',
      },
      {
        type: 'text',
        label: 'Confirm Password',
        placeholder: 'Confirm your password',
        formControlName: 'confirmPassword',
        value: '',
      },
    ],
    button: {
      title: 'Save',
      icon: 'ionSave',
    },
  };

  saveProfile() {
    this.router.navigate(['/']);
  }
}
