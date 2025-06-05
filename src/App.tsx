import { useState } from "react";
import Terminal from "./Terminal";
import { type TerminalRecord, Command } from "./utils/command";

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
      <div className="flex flex-row gap-1 bg-slate-800 text-white">
        <button
          className={
            "flex h-full sm:w-1/4 w-1/3 p-4 rounded-2xl hover:bg-slate-500 hover:text-white " +
            (terminalVisible ? "bg-slate-500 " : "bg-slate-700 ") +
            (terminalVisible ? "text-white" : "text-gray-300")
          }
          onClick={() => !terminalVisible && setTerminalVisible(true)}
        >
          Terminal
        </button>
        <button
          className={
            "flex h-full sm:w-1/4 w-1/3 p-4 rounded-2xl hover:bg-slate-500 hover:text-white " +
            (terminalVisible ? "bg-slate-700 " : "bg-slate-500 ") +
            (terminalVisible ? "text-gray-300" : "text-white")
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
        <></>
      )}
    </main>
  );
}
