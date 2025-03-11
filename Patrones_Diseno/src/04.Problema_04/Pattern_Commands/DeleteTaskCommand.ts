import { logColor } from '../../utils/colors';
import { formatTaskLog } from '../utils/logUtils';
import { Task } from '../Models/Task';
import { ITaskCommand } from './ITaskCommand';

export class DeleteTaskCommand implements ITaskCommand {
  private taskList: Task[];
  private task: Task;
  private taskIndex: number | null = null;

  constructor(taskList: Task[], task: Task) {
    this.taskList = taskList;
    this.task = task;
  }

  execute(): void {
    this.taskIndex = this.taskList.indexOf(this.task);
    if (this.taskIndex > -1) {
      this.taskList.splice(this.taskIndex, 1);
      logColor(`Tarea eliminada: ${formatTaskLog(this.task)}`, 'bgGreen');
    } else {
      logColor(`No se encontró la tarea a eliminar: ${formatTaskLog(this.task)}`, 'bgRed');
    }
  }

  undo(): void {
    if (this.taskIndex !== null && this.taskIndex >= 0) {
      this.taskList.push(this.task);
      logColor(`Se ha restaurado la tarea: ${formatTaskLog(this.task)}`, 'bgYellow');
    } else {
      logColor(`No se puede restaurar la tarea: ${formatTaskLog(this.task)}`, 'bgRed');
    }
  }
}
