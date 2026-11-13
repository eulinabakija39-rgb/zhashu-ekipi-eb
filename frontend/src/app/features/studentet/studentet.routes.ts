import { Routes } from '@angular/router';

/** Routes e feature-it "Studentët" — secila faqe ngarkohet me lazy loading */
export const STUDENTET_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./student-list/student-list.component').then((m) => m.StudentListComponent),
  },
  {
    path: 'shto',
    loadComponent: () =>
      import('./student-form/student-form.component').then((m) => m.StudentFormComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./student-detail/student-detail.component').then((m) => m.StudentDetailComponent),
  },
];
