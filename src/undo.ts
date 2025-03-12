import { signal } from "@preact/signals";

export interface Command {
  do(): void;
  undo(): void;
}

export const undoStack = signal<Command[]>([]);
export const redoStack = signal<Command[]>([]);

export function execute(command: Command) {
  undoStack.value = [
    ...undoStack.value,
    command
  ];
  redoStack.value = [];
}

export function undo() {
  const command = undoStack.value[undoStack.value.length - 1];
  undoStack.value = undoStack.value.slice(0, undoStack.value.length-1);
  if (command) {
    redoStack.value = [
      ...redoStack.value,
      command
    ];
    command.undo();
  }
}

export function redo() {
  const command = redoStack.value[redoStack.value.length - 1];
  redoStack.value = redoStack.value.slice(0, redoStack.value.length-1);
  if (command) {
    undoStack.value = [
      ...undoStack.value,
      command
    ];
    command.do();
  }
}
