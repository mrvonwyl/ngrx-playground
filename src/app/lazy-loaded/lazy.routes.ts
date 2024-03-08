import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { LazyChildComponent } from './components/lazy-child/lazy-child.component';
import { LazyComponent } from './components/lazy/lazy.component';
import * as LazyEffects from './state/lazy.effects';
import { lazyFeature } from './state/lazy.reducer';
export const routes: Routes = [
  {
    path: 'lazy-child',
    component: LazyChildComponent,
  },
  {
    path: '',
    component: LazyComponent,
    // it does not matter where the effects are provided. it somehow always seem to be in a separate injection or router context
    providers: [provideState(lazyFeature), provideEffects(LazyEffects)],
  },
];
