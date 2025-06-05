import type { Experience, Project } from "../../utils/card";

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

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const urlRegex = new RegExp(/(https:\/\/[^\s"']+)/);
  return (
    <div className="flex flex-col w-full py-2">
      <div className="flex flex-row w-full justify-between">
        <div className="flex w-fit flex-col">
          <div className="flex w-fit text-lg flex-row items-end">
            <div className="font-bold ">{experience.title}</div>
            <div>, {experience.company}</div>
          </div>
          <div>
            {experience.duration}, {experience.location}
          </div>
        </div>

        <div className="flex flex-row gap-1">
          {experience.techStack.map((element, i) => (
            <div
              key={i}
              className="h-10 p-2 rounded-full bg-zinc-600 aspect-square items-center"
            >
              <img
                src={element.svg}
                className="h-full w-full"
                alt={element.alt}
              />
            </div>
          ))}
        </div>
      </div>

      <ul className="list-disc px-4">
        {experience.descriptions.map((description, i) =>
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
