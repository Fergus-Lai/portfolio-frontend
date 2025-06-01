import { useState } from "react";
import CommandLine from "./component/commandline";
import { Command } from "./command";

function App() {
  const [commands, setCommands] = useState([new Command()]);
  const [path, setPath] = useState("~");
  const commandSave = (newCommand: string) => {
    setCommands((prevCommands) => {
      if (prevCommands.length === 0) return prevCommands;
      const newCommands = [...prevCommands];
      const lastCommand = newCommands[newCommands.length - 1];
      lastCommand.command = newCommand;
      newCommands.push(new Command(path, ""));
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
