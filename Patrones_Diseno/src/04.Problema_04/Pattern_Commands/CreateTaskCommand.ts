import { logColor } from "../../utils/colors";
import { Task } from "../Models/Task";
import { ITaskCommand } from "./ITaskCommand";

export class CreateTaskCommand implements ITaskCommand {
  private taskList: Task[];
  private task: Task;

  constructor(taskList: Task[], task: Task) {
    this.taskList = taskList;
    this.task = task;
  }

  execute(): void {
    this.taskList.push(this.task);
    logColor(`Tarea creada: ${this.task.id} ${this.task.title}`, "bgGreen");
  }

  undo(): void {
    this.taskList.pop();
    logColor(
      `Se ha deshecho la creación de la tarea: ${this.task.id} ${this.task.title}`,
      "bgYellow"
    );
  }
}
