import { createReducer, on, Action } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [new Todo('Salvar al mundo')];

const _todoReducer = createReducer(
  initialState,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.toggleAll, (state, { completado }) =>
    state.map((todo) => {
      return { ...todo, completado };
    })
  ),
  on(actions.eliminar, (state, { id }) =>
    state.filter((todo) => todo.id !== id)
  ),
  on(actions.toggle, (state, { id }) =>
    state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return { ...todo };
      }
    })
  ),
  on(actions.actualizar, (state, { id, texto }) =>
    state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      }
      return { ...todo };
    })
  ),
  on(actions.eliminarCompletados, (state) =>
    state.filter((todo) => !todo.completado)
  )
);

export function todoReducer(state: Todo[], action: Action) {
  return _todoReducer(state, action);
}
