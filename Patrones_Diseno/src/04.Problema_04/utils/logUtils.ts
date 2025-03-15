import { Task } from '../Models/Task';

export function formatTaskLog(task: Task): string {
  return `(ID: ${task.id}, Tarea: ${task.title}, Estado: ${task.completed})`;
}
