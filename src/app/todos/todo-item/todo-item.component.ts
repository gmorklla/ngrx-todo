import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as actions from './../todo.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputEditar') inputEditar: ElementRef;
  chkCompletado: FormControl;
  txtInput: FormControl;
  editando = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges
      .pipe(
        tap(() =>
          this.store.dispatch(
            actions.toggle({
              id: this.todo.id,
            })
          )
        )
      )
      .subscribe();
  }

  modoEdicion() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.inputEditar.nativeElement.select();
    }, 1);
  }

  actualizar() {
    this.editando = false;
    if (this.txtInput.invalid || this.txtInput.value === this.todo.texto) {
      return;
    }
    this.store.dispatch(
      actions.actualizar({ id: this.todo.id, texto: this.txtInput.value })
    );
  }

  eliminar() {
    this.store.dispatch(actions.eliminar({ id: this.todo.id }));
  }
}
