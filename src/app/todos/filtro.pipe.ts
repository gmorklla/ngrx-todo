import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { FiltrosValidos } from '../filtro/filtro.model';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(todos: Todo[], filtro: FiltrosValidos): Todo[] {
    switch (filtro) {
      case 'completados':
        return todos.filter((todo) => !!todo.completado);
      case 'activos':
        return todos.filter((todo) => !todo.completado);
      default:
        return todos;
    }
  }
}
