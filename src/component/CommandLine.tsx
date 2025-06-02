import { useEffect, useState } from "react";
import type { Command } from "../utils/command";

interface Props {
  command: Command;
  commandSave: (newCommand: string) => void;
  commands: string[];
}

export default function CommandLine({ command, commandSave, commands }: Props) {
  const [disabled, setDisabled] = useState(false);
  const [commandState, setCommandState] = useState(command.command);
  const [commandHistoryIndex, setCommandHistoryindex] = useState(
    commands.length
  );

  useEffect(() => {
    if (commandHistoryIndex == commands.length && !disabled) {
      setCommandState("");
    } else {
      setCommandState(commands[commandHistoryIndex]);
    }
    return () => {};
  }, [commandHistoryIndex, commands, disabled]);

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
          if (e.key == "ArrowUp") {
            e.preventDefault();
            setCommandHistoryindex(Math.max(0, commandHistoryIndex - 1));
          }
          if (e.key == "ArrowDown") {
            e.preventDefault();
            setCommandHistoryindex(
              Math.min(commands.length, commandHistoryIndex + 1)
            );
          }
        }}
      />
    </div>
  );
}
