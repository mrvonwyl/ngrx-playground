import { inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { LazyActions } from './lazy.actions';

export const loadTodos = createEffect(
  (
    actions$ = inject(Actions),
    router = inject(Router),
    route = inject(ActivatedRoute)
  ) =>
    actions$.pipe(
      ofType(LazyActions.navigate),
      tap(() => {
        router.navigate(['lazy-child'], { relativeTo: route });
      })
    ),
  { functional: true, dispatch: false }
);
