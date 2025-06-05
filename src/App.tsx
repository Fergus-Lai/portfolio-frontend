import { useState } from "react";
import Terminal from "./Terminal";
import { type TerminalRecord, Command } from "./utils/command";
import BrowserTab from "./Browser";
import { NavigatorTab } from "./component/browser/NavigatorTab";
import { ContactMe } from "./Contact";

export default function App() {
  const [tabIndex, setTabIndex] = useState(0);
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
        <NavigatorTab
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          selfIndex={0}
          text="Terminal"
        />
        <NavigatorTab
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          selfIndex={1}
          text="Internet Browser"
        />
        <NavigatorTab
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          selfIndex={2}
          text="Contact Me"
        />
      </div>
      {tabIndex == 0 ? (
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
      ) : tabIndex == 1 ? (
        <BrowserTab />
      ) : (
        <ContactMe />
      )}
    </main>
  );
}
