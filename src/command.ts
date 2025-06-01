export class Command {
  path: string;
  command: string;

  constructor(path = "~", command = "") {
    this.path = path;
    this.command = command;
  }
}

export const cdRegex: RegExp = /(?:cd\s)(.*)/;
