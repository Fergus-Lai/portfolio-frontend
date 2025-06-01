export default function CommandLine() {
  return (
    <div className="flex flex-row p-4 font-mono">
      <p className="font-bold text-terminal-green">visitor@fergus-portfolio</p>
      <p className="text-white">:</p>
      <p className="text-terminal-blue">~</p>
      <p className="text-white pr-2">$</p>
      <input className="focus:outline-0 text-white h-6" />
    </div>
  );
}
