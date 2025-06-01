import { useState } from "react";

interface Props {
  command: string;
  commandSave: (newCommand: string) => void;
}

export default function CommandLine({ command, commandSave }: Props) {
  const [disabled, setDisabled] = useState(false);
  const [commandState, setCommandState] = useState(command);
  return (
    <div className="flex flex-row p-4 font-mono">
      <p className="font-bold text-terminal-green">visitor@fergus-portfolio</p>
      <p className="text-white">:</p>
      <p className="text-terminal-blue">~</p>
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
            commandSave(command);
          }
        }}
      />
    </div>
  );
}
