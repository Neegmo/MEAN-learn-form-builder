import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormEditComponent } from './pages/form-edit/form-edit.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    title: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'home',
      },
      {
        path: 'edit-form',
        component: FormEditComponent,
        title: 'Edit Form',
      },
    ],
  },
  {
    path: 'public',
    component: PublicLayoutComponent,
    title: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        title: 'home',
      },
      {
        path: 'register',
        component: RegisterComponent,
        title: 'home',
      },
    ],
  },
];
