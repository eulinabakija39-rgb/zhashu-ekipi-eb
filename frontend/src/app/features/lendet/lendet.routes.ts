import { Routes } from '@angular/router';

export const LENDET_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./lenda-list/lenda-list.component').then((m) => m.LendaListComponent),
  },
  {
    path: 'shto',
    loadComponent: () =>
      import('./lenda-form/lenda-form.component').then((m) => m.LendaFormComponent),
  },
];
