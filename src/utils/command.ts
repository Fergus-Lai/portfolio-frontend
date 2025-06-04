import { checkDirectory } from "./api";

export class Command {
  path: string;
  command: string;

  constructor(path = "~", command = "") {
    this.path = path;
    this.command = command;
  }
}

export class Help {
  args: string;
  constructor(args: string) {
    this.args = args;
  }
}

export class Wget {
  file: string;
  constructor(file: string) {
    this.file = file;
  }
}

export class CatOutput {
  content: string;
  constructor(content: string) {
    this.content = content;
  }
}

export class CommandError {
  command: string;
  error: string;

  constructor(command: string, error: string) {
    this.command = command;
    this.error = error;
  }
}

interface ILSOuput {
  file: string[];
  directory: string[];
}

export class LSOutput {
  file: string[] = [];
  directory: string[] = [];

  constructor(data: ILSOuput) {
    this.file = data.file;
    this.directory = data.directory;
  }
}

export async function changeDirectory(currentPath: string, newPath: string) {
  newPath.split("/").forEach((element) => {
    if (element == "..") {
      currentPath = currentPath.split("/").slice(0, -1).join("/");
      if (currentPath == "") currentPath = "~";
    } else if (element == "~") {
      currentPath = "~";
    } else if (element != ".") {
      currentPath =
        currentPath == "~" ? "/" + element : currentPath + "/" + element;
    }
  });
  if (!(await checkDirectory(currentPath)))
    throw RangeError("No such directory");
  return currentPath;
}

export type CommandOutput = LSOutput | CommandError | CatOutput | Help | Wget;

export type TerminalRecord = Command | CommandOutput;
