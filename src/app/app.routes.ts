import { Routes } from '@angular/router';
import { TodoOverviewComponent } from './components/todo-overview/todo-overview.component';

export const routes: Routes = [
  {
    path: 'lazy1',
    loadChildren: () =>
      import('./lazy-loaded/lazy.routes').then((routes) => routes.routes),
  },
  {
    path: 'lazy2',
    loadChildren: () =>
      import('./lazy-loaded/lazy.routes').then((routes) => routes.routes),
  },
  {
    path: '',
    component: TodoOverviewComponent,
  },
];
