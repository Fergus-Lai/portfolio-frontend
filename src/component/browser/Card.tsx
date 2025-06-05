import type { Project } from "../../utils/card";

export const ProjectCard = ({ project }: { project: Project }) => {
  const urlRegex = new RegExp(/(https:\/\/[^\s"']+)/);
  return (
    <div className="flex flex-col w-full py-2">
      <div className="flex flex-row w-full justify-between">
        <a
          href={project.url}
          className={
            "flex w-fit font-bold text-lg " +
            (project.url ? "border-white border-b-2" : "")
          }
        >
          {project.title}
        </a>
        <div className="flex flex-row gap-1">
          {project.techStack.map((element, i) => (
            <div key={i} className="p-2 rounded-full bg-zinc-600">
              <img
                src={element.svg}
                className="h-6 aspect-square"
                alt={element.alt}
              />
            </div>
          ))}
        </div>
      </div>

      <ul className="list-disc px-4">
        {project.descriptions.map((description, i) =>
          description.includes("https://") ? (
            <li key={i}>
              {description.split(urlRegex).map((element, i) =>
                element.match(urlRegex) ? (
                  <a key={i} href={element} className="underline">
                    {element}
                  </a>
                ) : (
                  <div key={i}>{element}</div>
                )
              )}
            </li>
          ) : (
            <li key={i}>{description}</li>
          )
        )}
      </ul>
    </div>
  );
};
