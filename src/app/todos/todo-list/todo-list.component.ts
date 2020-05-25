import { FiltrosValidos } from './../../filtro/filtro.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Todo } from '../models/todo.model';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  filtroActivo: FiltrosValidos = 'todos';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .pipe(
        tap(({ todos, filtro }) => {
          this.todos = todos;
          this.filtroActivo = filtro;
        })
      )
      .subscribe();
  }
}
