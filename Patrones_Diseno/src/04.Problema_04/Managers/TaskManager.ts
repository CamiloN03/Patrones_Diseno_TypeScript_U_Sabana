import { logColor } from "../../utils/colors";
import { Task } from "../Models/Task";
import { ITaskCommand } from "../Pattern_Commands/ITaskCommand";

export class TaskManager {
  private _history: ITaskCommand[] = [];

  executeCommand(command: ITaskCommand): void {
    command.execute();
    this._history.push(command);
  }

  undoCommandForIdTask(taskId: number): void {
    const commandIndex = this._history.findIndex((cmd) => {
      return (cmd as any).task?.id === taskId;
    });

    if (commandIndex === -1) {
      logColor(`No se encontró una tarea asociado con ID: ${taskId}`, "bgRed");
      return;
    }

    const commandToUndo = this._history[commandIndex];
    commandToUndo.undo();

    this._history.splice(commandIndex, 1);
  }

  showHistory(): void {
    logColor(`Tareas:`, "bgBlue");
    if (this._history.length === 0) {
      logColor(`No hay tareas en el historial.`, "bgRed");
      return;
    }

    this._history.forEach((cmd, i) => {
      const task = (cmd as any).task as Task | undefined;
      const taskInfo = task ? `(ID: ${task.id}, Tarea: ${task.title})` : "";
      logColor(`${i}: ${cmd.constructor.name} ${taskInfo}`, "bgBlue");
    });
  }
}
