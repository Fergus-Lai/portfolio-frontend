import { useEffect, useState } from "react";
import type { Command } from "../../utils/command";

interface Props {
  disabled: boolean;
  command: Command;
  commandSave: (newCommand: string) => void;
  commands: string[];
}

export default function CommandLine({
  disabled,
  command,
  commandSave,
  commands,
}: Props) {
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
    <div className="flex flex-col md:flex-row px-4 font-mono w-full">
      <div className="flex flex-row w-fit">
        <p className="font-bold text-terminal-green whitespace-nowrap">
          visitor@fergus-portfolio
        </p>
        <p className="text-white">:</p>
      </div>
      <div className="flex flex-row w-full">
        <p className="text-terminal-blue">{command.path}</p>
        <p className="text-white pr-2">$</p>
        <input
          autoFocus={!disabled}
          className="focus:outline-0 text-white break-words w-full resize-none flex-1"
          disabled={disabled}
          value={commandState ?? ""}
          type="text"
          onChange={(e) => {
            setCommandState(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
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
    </div>
  );
}
