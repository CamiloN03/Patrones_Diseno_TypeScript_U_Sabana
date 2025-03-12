import { logColor } from '../../utils/colors';
import { formatTaskLog } from '../utils/logUtils';
import { Task } from '../Models/Task';
import { ITaskCommand } from './ITaskCommand';

export class CompleteTaskCommand implements ITaskCommand {
  private taskList: Task[];
  private task: Task;

  constructor(taskList: Task[], task: Task) {
    this.taskList = taskList;
    this.task = task;
  }

  execute(): void {
    if (!this.taskList.includes(this.task)) {
      logColor(`No se puede completar una tarea eliminada: ${formatTaskLog(this.task)}`, 'bgRed');
      return;
    }
    this.task.toggleComplete();
    logColor(`Tarea completada: ${formatTaskLog(this.task)}`, 'bgGreen');
  }

  undo(): void {
    if (!this.taskList.includes(this.task)) {
      logColor(`No se puede deshacer el completado de una tarea eliminada: ${formatTaskLog(this.task)}`, 'bgRed');
      return;
    }
    this.task.toggleComplete();
    logColor(`Se ha revertido a su estado anterior la tarea: ${formatTaskLog(this.task)}`, 'bgYellow');
  }
}
