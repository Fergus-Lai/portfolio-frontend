import type { CommandError } from "../../utils/command";

interface Props {
  commandError: CommandError;
}

export default function ErrorLine({ commandError }: Props) {
  return (
    <div className="flex flex-row px-4 font-mono w-full text-white">
      bash: {commandError.command}: {commandError.error}
    </div>
  );
}
