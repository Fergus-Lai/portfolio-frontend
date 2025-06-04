interface Props {
  command: string;
}

const helpElement = (command: string) => {
  switch (command) {
    case "":
      return (
        <>
          <div>
            These shell commands are defined internally. Type 'help' to see this
            list.
          </div>
          <div>Type 'help name' to find out more about the function 'name'</div>
          <div className="grid grid-cols-2 gap-x-4">
            <div>cd [dir]</div>
            <div>ls</div>
            <div>help [pattern ...]</div>
            <div>clear</div>
            <div>reset</div>
          </div>
        </>
      );
    case "cd":
      return (
        <>
          <div>cd: cd [dir]</div>
          <div>Change the shell working directory.</div>
          <div>
            Change the current directory to DIR. The default DIR is the value of
            the HOME shell variable.
          </div>
        </>
      );
    case "ls":
      return (
        <>
          <div>ls: ls</div>
          <div>List information about the FILEs.</div>
        </>
      );
    case "cat":
      return (
        <>
          <div>cat: cat [file ...]</div>
          <div>Concatenate FILE(s) to standard output.</div>
        </>
      );
    case "help":
      return (
        <>
          <div>help: help [pattern ...]</div>
          <div>Display information about available commands.</div>
          <div>
            Displays brief summaries of builtin commands. If PATTERN is
            specified, gives detailed help on all commands matching PATTERN,
            otherwise the list of help topics is printed.
          </div>
        </>
      );
    default:
      return <div>no help topics match '{command}'. Try 'help help'</div>;
  }
};

export default function HelpLine({ command }: Props) {
  return (
    <div className="flex flex-col px-4 font-mono w-full text-white">
      {helpElement(command)}
    </div>
  );
}
