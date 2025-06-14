import CommandLine from "./component/terminal/CommandLine";
import {
  CatOutput,
  changeDirectory,
  Command,
  CommandError,
  Help,
  LSOutput,
  Wget,
  type CommandOutput,
  type TerminalRecord,
} from "./utils/command";
import ErrorLine from "./component/terminal/ErrorLine";
import { downloadFile, getFile, listDirectory } from "./utils/api";
import LSOutputLine from "./component/terminal/LSLine";
import CatLine from "./component/terminal/CatLine";
import HelpLine from "./component/terminal/HelpLine";
import Welcome from "./component/terminal/Welcome";
import { WgetLine } from "./component/terminal/Wget";

interface Props {
  terminalRecords: TerminalRecord[];
  setTerminalRecords: React.Dispatch<React.SetStateAction<TerminalRecord[]>>;
  commandHistory: string[];
  setCommandHistory: React.Dispatch<React.SetStateAction<string[]>>;
  showWelcome: boolean;
  setShowWelcome: React.Dispatch<React.SetStateAction<boolean>>;
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}

function Terminal({
  terminalRecords,
  setTerminalRecords,
  commandHistory,
  setCommandHistory,
  showWelcome,
  setShowWelcome,
  path,
  setPath,
}: Props) {
  const commandSave = async (newCommand: string) => {
    let currentPath = path;

    const commandSplitted = newCommand.split(" ");
    const command = commandSplitted[0];
    const args = commandSplitted.slice(1);
    const commandOuputs: CommandOutput[] = [];

    switch (command.toLowerCase()) {
      case "cd": {
        if (args.length > 0) {
          try {
            currentPath = await changeDirectory(currentPath, args[0]);
            setPath(currentPath);
          } catch (error) {
            console.log(error);
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
        for (const arg of args) {
          try {
            const filePath = currentPath + "/" + arg.replace("./", "");
            commandOuputs.push(await getFile(filePath));
          } catch (error) {
            console.log(error);
            commandOuputs.push(
              new CommandError(command, "Unexpected error occurred")
            );
          }
        }
        break;
      }
      case "help": {
        commandOuputs.push(new Help(args.length > 0 ? args.join(" ") : ""));
        break;
      }
      case "clear":
      case "reset": {
        setTerminalRecords([new Command(currentPath, "")]);
        setCommandHistory([]);
        setShowWelcome(false);
        return;
      }
      case "wget": {
        for (const arg of args) {
          try {
            const filePath = currentPath + "/" + arg.replace("./", "");
            const filename = filePath.split("/").pop();
            if (!filename) throw Error("File Name Missing");
            const blob = await downloadFile(filePath);
            if (blob instanceof CommandError) {
              commandOuputs.push(blob);
              return;
            }
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            commandOuputs.push(new Wget(filename));
          } catch (error) {
            console.log(error);
            commandOuputs.push(
              new CommandError(command, "Unexpected error occurred")
            );
          }
        }
        break;
      }
      case "":
        break;
      default:
        commandOuputs.push(new CommandError(command, "command not found"));
        break;
    }

    if (newCommand.length != 0) {
      setCommandHistory((prevCommands) => {
        const newCommands = [...prevCommands];
        newCommands.push(newCommand);
        return newCommands;
      });
    }

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
    <div className="flex flex-col h-full bg-terminal-purple overflow-y-auto pt-2">
      {showWelcome && <Welcome />}
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
        ) : record instanceof Help ? (
          <HelpLine command={record.args} key={i} />
        ) : record instanceof Wget ? (
          <WgetLine wget={record} key={i} />
        ) : (
          <ErrorLine commandError={record} key={i} />
        )
      )}
    </div>
  );
}

export default Terminal;
