import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Todo } from './todo.models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  loadTodos(): Observable<Todo[]> {
    const todos = [
      {
        id: '1',
        description: 'Bla',
      },
    ];

    // return throwError(() => new Error('API Error'));

    return of(todos).pipe(delay(1000));
  }
}
