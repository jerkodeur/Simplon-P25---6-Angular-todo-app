import { Injectable } from '@angular/core';
import { Todo } from 'src/app/Todo.model';
import { TodoList } from 'src/app/TodoList.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService{
  todos = new TodoList([]);

  constructor() {
  }

  getAllTodos(): Todo[] {
    return this.todos.getAll();
  }

  getFilterTodos(filter: string): Todo[] {
    return this.todos.getByFilter(filter);
  }

  addTodo(todo: Todo): void {
    this.todos.add(todo);
  }

  toggleTodo(todo: Todo): void {
    this.todos.toggle(todo);
  }

  removeTodo(todo: Todo): void {
    this.todos.remove(todo);
  }

  removeCompletedTodos(): void {
    this.todos.removeCompleted();
  }
}
