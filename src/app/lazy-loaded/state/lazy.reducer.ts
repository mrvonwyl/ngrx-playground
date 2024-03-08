import { createFeature, createReducer } from '@ngrx/store';
import { initialAppState, lazyFeatureKey } from './lazy.state';

export const lazyReducer = createReducer(initialAppState);

export const lazyFeature = createFeature({
  name: lazyFeatureKey,
  reducer: lazyReducer,
});
