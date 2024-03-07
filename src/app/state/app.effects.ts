import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, throwError } from 'rxjs';
import { TodoService } from '../todo.service';
import { AppActions } from './app.actions';

export const loadTodos = createEffect(
  (actions$ = inject(Actions), todoService = inject(TodoService)) =>
    actions$.pipe(
      ofType(AppActions.loadTodos),
      exhaustMap(({ limit }) => {
        // verify params and return throwError if conditions are not met
        if (limit < 1) {
          console.log('Limit too low', limit);
          return throwError(() => new Error('blaaa'));
        }

        // call service and map to success and catchError to failure
        // this is ok because it catches / ends the internal observable, but leaves the effect observable be
        return todoService.loadTodos().pipe(
          map((todos) => AppActions.loadTodosSuccess({ todos })),
          catchError((error) => of(AppActions.loadTodosFailure({ error })))
        );
      }),
      // catchError at this level is only ok, if it returns throwError
      catchError((error) => {
        console.log('123');

        return throwError(() => error);
      })
    ),
  { functional: true }
);

// Notes
// a catchError on the same level as ofType always needs to return throwError() in order to keep the effect subscribed (internal resubscribe)
