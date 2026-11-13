import { Routes } from '@angular/router';

/**
 * Routes kryesore.
 * Çdo feature ngarkohet me LAZY LOADING:
 *  - loadComponent -> ngarkon një komponent të vetëm
 *  - loadChildren  -> ngarkon një skedar me routes të feature-it
 */
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'studentet',
    loadChildren: () =>
      import('./features/studentet/studentet.routes').then((m) => m.STUDENTET_ROUTES),
  },
  {
    path: 'lendet',
    loadChildren: () =>
      import('./features/lendet/lendet.routes').then((m) => m.LENDET_ROUTES),
  },
  {
    path: 'profesoret',
    loadChildren: () =>
      import('./features/profesoret/profesoret.routes').then((m) => m.PROFESORET_ROUTES),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
