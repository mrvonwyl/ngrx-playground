import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { LazyActions } from './lazy.actions';

export const loadTodos = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) =>
    actions$.pipe(
      ofType(LazyActions.navigate),
      tap(() => {
        // works
        router.navigate([router.url, 'lazy-child']);

        // do not work
        // router.navigate(['lazy-child']);
        // router.navigate(['lazy-child'], {relativeTo: activatedRoute});
      })
    ),
  { functional: true, dispatch: false }
);
