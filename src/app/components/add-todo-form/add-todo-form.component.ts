import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent {

  @Output() getTodo = new EventEmitter();
  constructor() { }


  submitForm(form: any) {
    this.getTodo.emit(form.value.label);
    form.reset();
  }

}
