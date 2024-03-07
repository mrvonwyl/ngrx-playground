import { createAction, props } from '@ngrx/store';
import { Todo } from '../todo.models';
import { appFeatureKey } from './app.state';

const actionPrefix = `[${appFeatureKey}]`;

export class AppActions {
  static readonly loadTodos = createAction(
    `${actionPrefix} Load Todos`,
    props<{ limit: number }>()
  );

  static readonly loadTodosSuccess = createAction(
    `${actionPrefix} Load Todos Success`,
    props<{ todos: Todo[] }>()
  );

  static readonly loadTodosFailure = createAction(
    `${actionPrefix} Load Todos Failure`,
    props<{ error: Error }>()
  );
}
