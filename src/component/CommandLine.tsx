import { useState } from "react";
import type { Command } from "../utils/command";

interface Props {
  command: Command;
  commandSave: (newCommand: string) => void;
}

export default function CommandLine({ command, commandSave }: Props) {
  const [disabled, setDisabled] = useState(false);
  const [commandState, setCommandState] = useState(command.command);
  return (
    <div className="flex flex-row px-4 font-mono">
      <p className="font-bold text-terminal-green">visitor@fergus-portfolio</p>
      <p className="text-white">:</p>
      <p className="text-terminal-blue">{command.path}</p>
      <p className="text-white pr-2">$</p>
      <input
        className="focus:outline-0 text-white h-6"
        type="text"
        disabled={disabled}
        value={commandState}
        onChange={(e) => {
          setCommandState(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            setDisabled(true);
            commandSave(commandState);
          }
        }}
      />
    </div>
  );
}
