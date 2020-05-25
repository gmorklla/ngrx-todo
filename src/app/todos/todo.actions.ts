import { createAction, props } from '@ngrx/store';

export const crear = createAction('[TODO] Crear', props<{ texto: string }>());
export const toggle = createAction('[TODO] Toggle', props<{ id: number }>());
export const toggleAll = createAction(
  '[TODO] Toggle all',
  props<{ completado: boolean }>()
);
export const actualizar = createAction(
  '[TODO] Actualizar',
  props<{ id: number; texto: string }>()
);
export const eliminar = createAction(
  '[TODO] Eliminar',
  props<{ id: number }>()
);
export const eliminarCompletados = createAction('[TODO] Eliminar completados');
