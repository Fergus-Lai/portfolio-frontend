export class Command {
  path: string;
  command: string;

  constructor(path = "~", command = "") {
    this.path = path;
    this.command = command;
  }
}

export function changeDirectory(currentPath: string, newPath: string) {
  newPath.split("/").forEach((element) => {
    if (element == "..") {
      currentPath = currentPath.split("/").slice(0, -1).join("/");
      if (currentPath == "") currentPath = "~";
    } else if (element != ".") {
      // TODO: Check Path Valid
      currentPath =
        currentPath == "~" ? "/" + element : currentPath + "/" + element;
    }
  });
  return currentPath;
}
