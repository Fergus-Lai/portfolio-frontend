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
