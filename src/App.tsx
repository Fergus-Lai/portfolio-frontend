import { useState } from "react";
import CommandLine from "./component/CommandLine";
import { changeDirectory, Command } from "./command";

function App() {
  const [commands, setCommands] = useState([new Command()]);
  const [path, setPath] = useState("~");
  const commandSave = (newCommand: string) => {
    let currentPath = path;

    const commandSplitted = newCommand.split(" ");
    const command = commandSplitted[0];
    const args = commandSplitted.slice(1);
    switch (command.toLowerCase()) {
      case "cd":
        {
          if (args.length > 0) {
            currentPath = changeDirectory(currentPath, args[0]);
            setPath(currentPath);
          }
        }
        break;
      default:
        break;
    }

    setCommands((prevCommands) => {
      if (prevCommands.length === 0) return prevCommands;
      const newCommands = [...prevCommands];
      const lastCommand = newCommands[newCommands.length - 1];
      lastCommand.command = newCommand;
      newCommands.push(new Command(currentPath, ""));
      return newCommands;
    });
  };

  return (
    <main className="flex min-h-screen min-w-screen h-full w-full bg-terminal-purple flex-col pt-2">
      {commands.map((command, i) => (
        <CommandLine command={command} commandSave={commandSave} key={i} />
      ))}
    </main>
  );
}

export default App;
