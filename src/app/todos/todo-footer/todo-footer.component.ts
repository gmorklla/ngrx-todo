import { AppState } from './../../app.state';
import { Component, OnInit } from '@angular/core';
import { FiltrosValidos } from 'src/app/filtro/filtro.model';
import { Store } from '@ngrx/store';
import { setFiltro } from 'src/app/filtro/filtro.actions';
import { tap } from 'rxjs/operators';
import { eliminarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  pendientes: number;
  filtroSeleccionado: FiltrosValidos = 'todos';
  filtros: FiltrosValidos[] = ['todos', 'activos', 'completados'];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('filtro')
      .pipe(tap((filtro) => (this.filtroSeleccionado = filtro)))
      .subscribe();
    this.store
      .select('todos')
      .pipe(
        tap(
          (todos) =>
            (this.pendientes = todos.filter((todo) => !todo.completado).length)
        )
      )
      .subscribe();
  }

  filtrar(filtro: FiltrosValidos) {
    this.store.dispatch(setFiltro({ filtro }));
  }

  eliminarCompletados() {
    this.store.dispatch(eliminarCompletados());
  }
}
