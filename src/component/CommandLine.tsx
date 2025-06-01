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
    <div className="flex flex-row px-4 font-mono w-full">
      <p className="font-bold text-terminal-green">visitor@fergus-portfolio</p>
      <p className="text-white">:</p>
      <p className="text-terminal-blue">{command.path}</p>
      <p className="text-white pr-2">$</p>
      <input
        autoFocus={!disabled}
        className="focus:outline-0 text-white break-words flex-auto resize-none"
        disabled={disabled}
        value={commandState}
        type="text"
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
