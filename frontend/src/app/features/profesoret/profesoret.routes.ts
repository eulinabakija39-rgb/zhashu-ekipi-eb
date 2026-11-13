import { Routes } from '@angular/router';

export const PROFESORET_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./profesor-list/profesor-list.component').then((m) => m.ProfesorListComponent),
  },
    {
    path: 'shto',
    loadComponent: () =>
      import('./profesor-form/profesor-form.component').then((m) => m.ProfesorFormComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./profesor-detail/profesor-detail.component').then((m) => m.ProfesorDetailComponent),
  },

];
