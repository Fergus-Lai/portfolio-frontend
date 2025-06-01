import { useState } from "react";
import CommandLine from "./component/CommandLine";
import { changeDirectory, Command } from "./utils/command";
import { CommandError } from "./utils/commandError";
import ErrorLine from "./component/ErrorLine";

function App() {
  const [terminalRecords, setTerminalRecords] = useState<
    (Command | CommandError)[]
  >([new Command()]);
  const [path, setPath] = useState("~");

  const commandSave = async (newCommand: string) => {
    let currentPath = path;

    const commandSplitted = newCommand.split(" ");
    const command = commandSplitted[0];
    const args = commandSplitted.slice(1);
    const commandOuputs: CommandError[] = [];
    switch (command.toLowerCase()) {
      case "cd":
        {
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
        }
        break;
      default:
        commandOuputs.push(new CommandError(command, "command not found"));
        break;
    }

    setTerminalRecords((prevCommands) => {
      if (prevCommands.length === 0) return prevCommands;
      const newCommands = [...prevCommands];
      const lastCommand = newCommands[newCommands.length - 1];
      lastCommand.command = newCommand;
      newCommands.push(...commandOuputs);
      newCommands.push(new Command(currentPath, ""));
      return newCommands;
    });
  };

  return (
    <main className="flex min-h-screen min-w-screen h-full w-full bg-terminal-purple flex-col pt-2">
      {terminalRecords.map((record, i) =>
        record instanceof Command ? (
          <CommandLine command={record} commandSave={commandSave} key={i} />
        ) : (
          <ErrorLine commandError={record} key={i} />
        )
      )}
    </main>
  );
}

export default App;
