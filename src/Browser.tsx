import { Projects } from "./component/browser/Projects";
import { Experiences } from "./component/browser/Experiences";

interface Props {
  experienceTab: boolean;
  setExperienceTab: React.Dispatch<React.SetStateAction<boolean>>;
  toContact: () => void;
}

export default function BrowserTab({
  experienceTab,
  setExperienceTab,
  toContact,
}: Props) {
  return (
    <div className="flex bg-black w-full h-full overflow-auto font-mono p-2 text-white gap-4 justify-center ">
      <div className="flex flex-col items-center gap-4 w-1/2 xl:w-1/3 min-w-md">
        <div className="flex flex-row w-full justify-between gap-4">
          <img src="/icon.jpeg" className="rounded-full h-32" />
          <div className="flex flex-col w-full justify-between">
            <div className="font-bold text-3xl">Fergus Lai</div>
            <div>London, United Kingdom</div>
            <div>Fullstack Software Engineer and Python Developer</div>
          </div>
        </div>
        <button
          className="border-white border-1 rounded-4xl py-2 cursor-pointer w-full"
          onClick={toContact}
        >
          Contact Me
        </button>
        <div className="flex flex-row justify-center w-full pt-4">
          <button
            className={
              "flex px-4 text-l w-1/2 justify-center border-b-1 font-semibold cursor-pointer " +
              (experienceTab
                ? "text-white border-white"
                : "text-zinc-600 border-zinc-600 hover:text-zinc-200 hover:border-zinc-200")
            }
            onClick={() => !experienceTab && setExperienceTab(true)}
          >
            Experience
          </button>
          <button
            className={
              "flex px-4 text-l w-1/2 justify-center border-b-1 font-semibold cursor-pointer " +
              (experienceTab
                ? "text-zinc-600 border-zinc-600 hover:text-zinc-200 hover:border-zinc-200"
                : "text-white border-white")
            }
            onClick={() => experienceTab && setExperienceTab(false)}
          >
            Project
          </button>
        </div>
        {experienceTab ? <Experiences /> : <Projects />}
        <div className="flex flex-col w-full border-t-zinc-600 border-t-2">
          <div className="text-xl font-extrabold">Education</div>
          <div className="flex flex-row w-full justify-between">
            <div className="flex gap-1">
              <div className="font-bold">Durham University</div> - BSc in
              Computer Science
            </div>
            <div>Oct 2022 - June 2025</div>
          </div>
        </div>
        <div className="flex flex-col w-full border-t-zinc-600 border-t-2 pb-8">
          <div className="text-xl font-extrabold">Skill</div>
          <div className="flex flex-row gap-2">
            <div className="font-bold">Frontend:</div> React, Tailwind, Vue,
            Tkinter
          </div>
          <div className="flex flex-row gap-2">
            <div className="font-bold">Backend:</div> Node.js, Socket.io,
            Express
          </div>
          <div className="flex flex-row gap-2">
            <div className="font-bold">Fullstack:</div> Next.js, Nuxt.js
          </div>
          <div className="flex flex-row gap-2">
            <div className="font-bold">Game Development:</div> Unity
          </div>
          <div className="flex flex-row gap-2">
            <div className="font-bold">Language:</div> TypeScript, Python, C#
          </div>
        </div>
      </div>
    </div>
  );
}
