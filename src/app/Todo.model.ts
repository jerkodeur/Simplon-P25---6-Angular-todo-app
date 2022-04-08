import { TodoInterface } from "./Todo.interface";

export class Todo implements TodoInterface {
  private static INC_ID = 0;

  id : number;
  label : string;
  active = true;

  constructor(label: string) {
    this.id = Todo.incrementId();
    this.label = label;
  }

  static incrementId() :number {
    ++this.INC_ID;
    return this.INC_ID;
  }
}
