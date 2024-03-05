import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { TodoService } from '../todo.service';
import { AppActions } from './app.actions';

export const loadTodos = createEffect(
  (actions$ = inject(Actions), todoService = inject(TodoService)) =>
    actions$.pipe(
      ofType(AppActions.loadTodos),
      exhaustMap(() => todoService.loadTodos()),
      map((todos) => AppActions.loadTodosSuccess({ todos }))
    ),
  { functional: true }
);
