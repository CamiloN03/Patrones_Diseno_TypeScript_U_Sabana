import { Task } from "./Models/Task";
import { TaskManager } from "./Managers/TaskManager";
import { CreateTaskCommand } from "./Pattern_Commands/CreateTaskCommand";

console.log("¡Hola, TypeScript con patrones de diseño!\n");

const taskList: Task[] = [];
const taskManager = new TaskManager();

const task1 = new Task(1, "Aprender patron command");
const task2 = new Task(2, "Aprender otro patron");

const createCmd = new CreateTaskCommand(taskList, task1);
taskManager.executeCommand(createCmd);

const createCmd2 = new CreateTaskCommand(taskList, task2);
taskManager.executeCommand(createCmd2);

taskManager.showHistory();

//reversion tarea por id
taskManager.undoCommandForIdTask(2);

taskManager.showHistory();
