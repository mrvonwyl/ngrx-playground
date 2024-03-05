import { createFeature, createReducer, on } from '@ngrx/store';
import { AppActions } from './app.actions';
import { AppState, appFeatureKey, initialAppState } from './app.state';

export const reducer = createReducer(
  initialAppState,
  on(AppActions.loadTodosSuccess, (state, { todos }): AppState => {
    return { ...state, todos };
  })
);

export const appFeature = createFeature({
  name: appFeatureKey,
  reducer,
});
