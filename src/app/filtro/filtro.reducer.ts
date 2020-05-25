import { createReducer, Action, on } from '@ngrx/store';
import { setFiltro } from './filtro.actions';
import { FiltrosValidos } from './filtro.model';

export const initialState: FiltrosValidos = 'todos';

const _filtroReducer = createReducer(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro)
);

export function filtroReducer(state: FiltrosValidos, action: Action) {
  return _filtroReducer(state, action);
}
