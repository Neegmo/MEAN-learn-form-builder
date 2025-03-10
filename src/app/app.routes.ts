import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SurveyEditComponent } from './pages/survey-edit/survey-edit.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SurveyPreviewComponent } from './pages/survey-preview/survey-preview.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
        path: 'profile',
        component: ProfileComponent,
        title: 'profile',
      },
      {
        path: 'edit-survey/:id',
        component: SurveyEditComponent,
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
      {
        path: 'preview-survey/:id',
        component: SurveyPreviewComponent,
        title: 'Survey',
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
