import { Todo } from './todos/models/todo.model';
import { FiltrosValidos } from './filtro/filtro.model';

export interface AppState {
  todos: Todo[];
  filtro: FiltrosValidos;
}
