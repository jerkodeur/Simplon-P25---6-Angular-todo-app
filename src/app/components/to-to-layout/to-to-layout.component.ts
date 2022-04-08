import { ActivatedRoute } from '@angular/router';
import { ActiveUrlService } from '../../services/active-url.service';
import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/Todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-to-to-layout',
  templateUrl: './to-to-layout.component.html',
  styleUrls: ['./to-to-layout.component.css']
})
export class ToToLayoutComponent implements OnInit {

  filter !: string;
  todos !: Todo[];

  constructor(private todoService: TodoService, private route: ActivatedRoute, private activeUrl: ActiveUrlService) {
   }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.filter = params['filter'];
      this.todos = this.filter ? this.todoService.getFilterTodos(this.filter) : this.todoService.getAllTodos()
    })
    this.activeUrl.activeFilter.next(this.filter);
  }

  onGetTodo = (newTodoLabel: string): void => {
    this.todoService.addTodo(new Todo(newTodoLabel));
    this.ngOnInit();
  }

  updateTodo = (todo: Todo): void => {
    this.todoService.toggleTodo(todo);
    this.ngOnInit();
  }

  removeTodo = (todo: Todo): void => {
    this.todoService.removeTodo(todo);
    this.ngOnInit();
  }
  removeCompletedTodo = (): void => {
    this.todoService.removeCompletedTodos();
    this.ngOnInit();
  }

}
