import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppActions } from '../../state/app.actions';
import { appFeature } from '../../state/app.reducer';

@Component({
  selector: 'app-todo-overview',
  standalone: true,
  imports: [],
  templateUrl: './todo-overview.component.html',
  styleUrl: './todo-overview.component.scss',
})
export class TodoOverviewComponent implements OnInit {
  private readonly store = inject(Store);

  todos = this.store.selectSignal(appFeature.selectTodos);

  ngOnInit(): void {
    this.store.dispatch(AppActions.loadTodos());
  }
}
