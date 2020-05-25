import { createAction, props } from '@ngrx/store';
import { FiltrosValidos } from './filtro.model';

export const setFiltro = createAction(
  '[FILTRADO] Set filtro',
  props<{ filtro: FiltrosValidos }>()
);
