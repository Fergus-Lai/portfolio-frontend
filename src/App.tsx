import { useState } from "react";
import Terminal from "./Terminal";
import { type TerminalRecord, Command } from "./utils/command";
import BrowserTab from "./Browser";

export default function App() {
  const [terminalVisible, setTerminalVisible] = useState(true);
  // Terminal States
  const [terminalRecords, setTerminalRecords] = useState<TerminalRecord[]>([
    new Command(),
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);

  const [path, setPath] = useState("~");
  return (
    <main className="flex flex-col h-screen w-screen">
      <div className="flex flex-row bg-zinc-800 text-white divide-x divide-zinc-500">
        <button
          className={
            "flex h-full sm:w-1/4 w-1/3 p-4 hover:bg-zinc-500 hover:text-white " +
            (terminalVisible ? "bg-zinc-700 " : "bg-zinc-800 ") +
            (terminalVisible ? "text-white" : "text-zinc-300")
          }
          onClick={() => !terminalVisible && setTerminalVisible(true)}
        >
          Terminal
        </button>
        <button
          className={
            "flex h-full sm:w-1/4 w-1/3 p-4 hover:bg-zinc-500 hover:text-white " +
            (terminalVisible ? "bg-zinc-800 " : "bg-zinc-700 ") +
            (terminalVisible ? "text-zinc-300" : "text-white")
          }
          onClick={() => terminalVisible && setTerminalVisible(false)}
        >
          Internet Browser
        </button>
      </div>
      {terminalVisible ? (
        <Terminal
          terminalRecords={terminalRecords}
          setTerminalRecords={setTerminalRecords}
          commandHistory={commandHistory}
          setCommandHistory={setCommandHistory}
          showWelcome={showWelcome}
          setShowWelcome={setShowWelcome}
          path={path}
          setPath={setPath}
        />
      ) : (
        <BrowserTab />
      )}
    </main>
  );
}
