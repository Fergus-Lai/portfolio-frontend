import { useState } from "react";
import CommandLine from "./component/CommandLine";
import { changeDirectory, Command } from "./utils/command";
import { CommandError } from "./utils/commandError";
import ErrorLine from "./component/ErrorLine";
import { getFile, listDirectory } from "./utils/api";
import { LSOutput } from "./utils/lsOutput";
import LSOutputLine from "./component/LSLine";
import { CatOutput } from "./utils/catOuput";
import CatLine from "./component/CatLine";

function App() {
  const [terminalRecords, setTerminalRecords] = useState<
    (Command | LSOutput | CommandError | CatOutput)[]
  >([new Command()]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);

  const [path, setPath] = useState("~");

  const commandSave = async (newCommand: string) => {
    let currentPath = path;

    const commandSplitted = newCommand.split(" ");
    const command = commandSplitted[0];
    const args = commandSplitted.slice(1);
    const commandOuputs: (LSOutput | CommandError | CatOutput)[] = [];

    switch (command.toLowerCase()) {
      case "cd": {
        if (args.length > 0) {
          try {
            currentPath = await changeDirectory(currentPath, args[0]);
            setPath(currentPath);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (_) {
            commandOuputs.push(
              new CommandError(command, "No such file or directory")
            );
          }
        }
        break;
      }
      case "ls": {
        try {
          const result = await listDirectory(currentPath);
          commandOuputs.push(result);
        } catch (e) {
          console.log(e);
          commandOuputs.push(
            new CommandError(command, "Unexpected error occurred")
          );
        }
        break;
      }
      case "cat": {
        if (args.length > 0) {
          try {
            const filePath = currentPath + "/" + args[0].replace("./", "");
            const result = await getFile(filePath);
            commandOuputs.push(new CatOutput(result));
          } catch (error) {
            console.log(error);
          }
        }
        break;
      }
      case "clear":
      case "reset": {
        setTerminalRecords([new Command(currentPath, "")]);
        setCommandHistory([]);
        return;
      }
      default:
        commandOuputs.push(new CommandError(command, "command not found"));
        break;
    }

    setCommandHistory((prevCommands) => {
      const newCommands = [...prevCommands];
      newCommands.push(newCommand);
      return newCommands;
    });

    setTerminalRecords((prevCommands) => {
      if (prevCommands.length === 0) return prevCommands;
      const newCommands = [...prevCommands];
      const lastCommand = newCommands[newCommands.length - 1];
      if (lastCommand instanceof Command) lastCommand.command = newCommand;
      newCommands.push(...commandOuputs);
      newCommands.push(new Command(currentPath, ""));
      return newCommands;
    });
  };
  return (
    <main className="flex min-h-screen min-w-screen h-full w-full bg-terminal-purple flex-col pt-2">
      {terminalRecords.map((record, i) =>
        record instanceof Command ? (
          <CommandLine
            disabled={terminalRecords.length - 1 != i}
            command={record}
            commandSave={commandSave}
            commands={commandHistory}
            key={i}
          />
        ) : record instanceof LSOutput ? (
          <LSOutputLine lsOutput={record} key={i} />
        ) : record instanceof CatOutput ? (
          <CatLine content={record.content} key={i} />
        ) : (
          <ErrorLine commandError={record} key={i} />
        )
      )}
    </main>
  );
}

export default App;
