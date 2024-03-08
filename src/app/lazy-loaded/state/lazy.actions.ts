import { createAction } from '@ngrx/store';
import { lazyFeatureKey } from './lazy.state';

const actionPrefix = `[${lazyFeatureKey}]`;

export class LazyActions {
  static readonly navigate = createAction(`${actionPrefix} Navigate`);
}
