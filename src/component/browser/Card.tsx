export type project = {
  title: string;
  url?: string;
  descriptions: string[];
};

export const ProjectCard = ({ project }: { project: project }) => {
  const urlRegex = new RegExp(/(https:\/\/[^\s"']+)/);
  return (
    <div className="flex flex-col w-full">
      <a
        href={project.url}
        className={
          "flex w-fit font-bold text-lg " +
          (project.url ? "border-white border-b-2" : "")
        }
      >
        {project.title}
      </a>
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
