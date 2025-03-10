import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideIcons } from '@ng-icons/core';

import { routes } from './app.routes';
import {
  ionAdd,
  ionAddCircle,
  ionBanSharp,
  ionClose,
  ionEye,
  ionHome,
  ionLogIn,
  ionMenu,
  ionPencil,
  ionPerson,
  ionRemove,
  ionRemoveCircle,
  ionSave,
  ionStatsChart,
  ionTrash,
} from '@ng-icons/ionicons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideIcons({
      ionBanSharp,
      ionTrash,
      ionPencil,
      ionSave,
      ionEye,
      ionStatsChart,
      ionAddCircle,
      ionAdd,
      ionHome,
      ionPerson,
      ionLogIn,
      ionRemoveCircle,
      ionClose,
      ionMenu,
    }),
  ],
};
