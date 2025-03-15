export class Task {
  constructor(public id: number, public title: string, public completed: boolean = false) {}

  toggleComplete(): void {
    this.completed = !this.completed;
  }
}
