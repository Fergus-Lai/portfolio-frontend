import { useState } from "react";
import Terminal from "./Terminal";
import { type TerminalRecord, Command } from "./utils/command";
import BrowserTab from "./Browser";
import { NavigatorTab } from "./component/browser/NavigatorTab";
import { ContactMe } from "./Contact";
import { Admin } from "./Admin";

export default function App() {
  const [tabIndex, setTabIndex] = useState(0);
  // Terminal States
  const [terminalRecords, setTerminalRecords] = useState<TerminalRecord[]>([
    new Command(),
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [path, setPath] = useState("~");

  // Contact States
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [inputName, setInputName] = useState("");
  const [message, setMessage] = useState("");

  // Browser States
  const [experienceTab, setExperienceTab] = useState(true);

  return (
    <main className="absolute inset-0">
      <div className="flex flex-col h-full w-full">
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
          <NavigatorTab
            tabIndex={tabIndex}
            setTabIndex={setTabIndex}
            selfIndex={3}
            text="Admin"
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
          <BrowserTab
            experienceTab={experienceTab}
            setExperienceTab={setExperienceTab}
            toContact={() => setTabIndex(2)}
          />
        ) : tabIndex == 2 ? (
          <ContactMe
            title={title}
            setTitle={setTitle}
            email={email}
            setEmail={setEmail}
            inputName={inputName}
            setInputName={setInputName}
            message={message}
            setMessage={setMessage}
          />
        ) : (
          <Admin />
        )}
      </div>
    </main>
  );
}
