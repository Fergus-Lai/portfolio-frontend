import type { TechStackLogo } from "./TechStack";

export const TechStackBar = ({ techStack }: { techStack: TechStackLogo[] }) => {
  return (
    <div className="flex flex-row gap-1">
      {techStack.map((element, i) => (
        <div
          key={i}
          className="h-10 p-2 rounded-full bg-zinc-600 aspect-square items-center"
        >
          <img src={element.svg} className="h-full w-full" alt={element.alt} />
        </div>
      ))}
    </div>
  );
};
