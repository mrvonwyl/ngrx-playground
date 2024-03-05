import { Todo } from '../todo.models';

export const appFeatureKey = 'app';

export interface AppState {
  title: string;
  todos: Todo[];
}

export const initialAppState: AppState = {
  title: 'app',
  todos: [],
};
