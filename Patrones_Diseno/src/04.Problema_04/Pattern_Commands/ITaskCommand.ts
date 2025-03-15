export interface ITaskCommand {
  execute(): void;
  undo(): void;
}
