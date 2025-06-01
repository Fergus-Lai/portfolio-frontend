import type { LSOutput } from "../utils/lsOutput";

interface Props {
  lsOutput: LSOutput;
}

export default function LSOutputLine({ lsOutput }: Props) {
  const files = new Set(lsOutput.file);
  const outputs = lsOutput.file.concat(lsOutput.directory);
  outputs.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  return (
    <div className="flex flex-wrap px-4 font-mono w-full gap-8">
      {outputs.map((element, i) =>
        files.has(element) ? (
          <div className="text-white" key={i}>
            {element}/
          </div>
        ) : (
          <div className="text-terminal-blue" key={i}>
            {element}
          </div>
        )
      )}
    </div>
  );
}
