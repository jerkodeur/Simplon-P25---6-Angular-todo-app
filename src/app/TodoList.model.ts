import { Todo } from "./Todo.model";

export class TodoList {
  private _todos: Todo[];

  constructor(todos: Todo[]) {
    this._todos = todos;
  }

  add(todo: Todo) {
    this._todos.push(todo);
  }

  getAll(): Todo[] {
    return this._todos;
  }

  getByFilter(filter: string): Todo[] {
      const state = filter === "active";
      return this._todos.filter(todo => todo.active == state);
  }

  toggle(todo: Todo): void {
    const newTodo = [...this._todos].map(item => {
      if (item == todo) {
        item.active = !item.active;
      }
      return item
    })
    this._todos = newTodo;
  }

  remove(todo : Todo) {
    this._todos = this._todos.filter(item => item !== todo);
  }

  removeCompleted() {
    this._todos = this._todos.filter(todo => todo.active == true);
  }

}
