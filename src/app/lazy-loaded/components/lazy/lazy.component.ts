import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LazyActions } from '../../state/lazy.actions';

@Component({
  selector: 'app-lazy',
  standalone: true,
  imports: [],
  templateUrl: './lazy.component.html',
  styleUrl: './lazy.component.scss',
})
export class LazyComponent {
  private readonly store = inject(Store);

  private readonly route = inject(ActivatedRoute);

  private readonly router = inject(Router);

  navigateByEffect(): void {
    this.store.dispatch(LazyActions.navigate());
  }

  navigateByRouter(): void {
    this.router.navigate(['lazy-child'], { relativeTo: this.route });
  }
}
