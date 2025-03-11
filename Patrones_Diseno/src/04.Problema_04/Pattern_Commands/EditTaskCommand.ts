import { logColor } from '../../utils/colors';
import { formatTaskLog } from '../utils/logUtils';
import { Task } from '../Models/Task';
import { ITaskCommand } from './ITaskCommand';

export class EditTaskCommand implements ITaskCommand {
  private taskList: Task[];
  private task: Task;
  private prevTitle: string;
  private newTitle: string;

  constructor(taskList: Task[], task: Task, newTitle: string) {
    this.taskList = taskList;
    this.task = task;
    this.prevTitle = task.title;
    this.newTitle = newTitle;
  }

  execute(): void {
    if (!this.taskList.includes(this.task)) {
      logColor(`No se puede editar una tarea eliminada: ${formatTaskLog(this.task)}`, 'bgRed');
      return;
    }
    this.task.title = this.newTitle;
    logColor(`Tarea editada: ${formatTaskLog(this.task)}`, 'bgGreen');
  }

  undo(): void {
    if (!this.taskList.includes(this.task)) {
      logColor(`No se puede deshacer la edición de una tarea eliminada: ${formatTaskLog(this.task)}`, 'bgRed');
      return;
    }
    this.task.title = this.prevTitle;
    logColor(`Se ha revertido la edición para la tarea: ${formatTaskLog(this.task)}`, 'bgYellow');
  }
}
