import { Task } from './Models/Task';
import { TaskManager } from './Managers/TaskManager';
import { CreateTaskCommand } from './Pattern_Commands/CreateTaskCommand';
import { DeleteTaskCommand } from './Pattern_Commands/DeleteTaskCommand';
import { EditTaskCommand } from './Pattern_Commands/EditTaskCommand';
import { CompleteTaskCommand } from './Pattern_Commands/CompleteTaskCommand';

console.log('¡Hola, Solución problema 4: Patrón Command!\n');

const taskList: Task[] = [];
const taskManager = new TaskManager();

const task1 = new Task(1, 'Aprender patron command');
const task2 = new Task(2, 'Aprender otro patron');
const task3 = new Task(3, 'Aprender');

const createCmd = new CreateTaskCommand(taskList, task1);
taskManager.executeCommand(createCmd);

const createCmd2 = new CreateTaskCommand(taskList, task2);
taskManager.executeCommand(createCmd2);

const createCmd3 = new CreateTaskCommand(taskList, task3);
taskManager.executeCommand(createCmd3);

const editCmd = new EditTaskCommand(taskList, task1, 'Aprender patron de diseño Command');
taskManager.executeCommand(editCmd);

const editCmd2 = new EditTaskCommand(taskList, task2, 'Aprender otro patron de diseño como Singleton');
taskManager.executeCommand(editCmd2);

const completeCmd = new CompleteTaskCommand(taskList, task1);
taskManager.executeCommand(completeCmd);

const deleteCmd3 = new DeleteTaskCommand(taskList, task3);
taskManager.executeCommand(deleteCmd3);

// taskManager.undoLastCommand();
// taskManager.undoLastCommand();
// taskManager.undoLastCommand();
// taskManager.undoLastCommand();
// taskManager.undoLastCommand();
// taskManager.undoLastCommand();
// taskManager.undoLastCommand();
// taskManager.undoLastCommand();
// taskManager.undoLastCommand();

// taskManager.undoCommandForIdTask(1);

taskManager.showHistory();
