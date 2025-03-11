import { logColor } from '../../utils/colors';
import { Task } from '../Models/Task';
import { ITaskCommand } from '../Pattern_Commands/ITaskCommand';
import { formatTaskLog } from '../utils/logUtils';

export class TaskManager {
  private _history: ITaskCommand[] = [];

  executeCommand(command: ITaskCommand): void {
    command.execute();
    this._history.push(command);
  }

  undoLastCommand(): void {
    const lastCommand = this._history.pop();
    if (lastCommand) {
      lastCommand.undo();
    } else {
      logColor(`No hay comandos para deshacer.`, 'bgRed');
    }
  }

  undoCommandForIdTask(taskId: number): void {
    const commandIndex = this._history
      .map((cmd, index) => ({ cmd, index }))
      .reverse()
      .find(({ cmd }) => (cmd as any).task?.id === taskId)?.index;

    if (commandIndex === undefined) {
      logColor(`No hay comandos para deshacer.`, 'bgRed');
      return;
    }

    const commandToUndo = this._history[commandIndex];
    commandToUndo.undo();
    this._history.splice(commandIndex, 1);
  }

  showHistory(): void {
    if (this._history.length === 0) {
      logColor(`No hay tareas en el historial.`, 'bgRed');
      return;
    }

    logColor(`Tareas:`, 'bgBlue');

    this._history.forEach((cmd, i) => {
      const task = (cmd as any).task as Task | undefined;
      const taskInfo = task ? `${formatTaskLog(task)}` : '';
      logColor(`${i}: ${cmd.constructor.name} ${taskInfo}`, 'bgBlue');
    });
  }
}
