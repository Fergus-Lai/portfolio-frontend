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
    <main className="flex flex-col min-h-screen min-w-screen h-full w-full">
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
