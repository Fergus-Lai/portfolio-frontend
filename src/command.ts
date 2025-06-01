export class Command {
  path: string;
  command: string;

  constructor(path = "~", command = "") {
    this.path = path;
    this.command = command;
  }
}
