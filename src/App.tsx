import { useState } from "react";
import CommandLine from "./component/commandline";

function App() {
  const [commands, setCommands] = useState([""]);
  const commandSave = (newCommand: string) => {
    setCommands((prevCommands) => {
      if (prevCommands.length === 0) return prevCommands;
      const newCommands = [...prevCommands];
      newCommands[newCommands.length - 1] = newCommand;
      newCommands.push("");
      return newCommands;
    });
  };

  return (
    <main className="flex min-h-screen min-w-screen h-full w-full bg-terminal-purple flex-col">
      {commands.map((command, i) => (
        <CommandLine command={command} commandSave={commandSave} key={i} />
      ))}
    </main>
  );
}

export default App;
