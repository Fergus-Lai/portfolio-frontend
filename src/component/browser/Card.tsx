import type { Experience, Project } from "../../utils/card";
import { CardDescription } from "./CardDescription";
import { TechStackBar } from "./TechStackBar";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col w-full py-2">
      <div className="flex md:flex-row flex-col w-full md:justify-between items-start gap-2 md:gap-0">
        <a
          href={project.url}
          className={
            "flex w-fit font-bold text-lg " +
            (project.url ? "border-white border-b-2" : "")
          }
        >
          {project.title}
        </a>
        <TechStackBar techStack={project.techStack} />
      </div>

      <CardDescription descriptions={project.descriptions} />
    </div>
  );
};

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div className="flex flex-col w-full py-2 gap-2">
      <div className="flex flex-row w-full justify-between">
        <div className="flex w-fit flex-col">
          <div className="flex w-fit md:text-lg flex-col md:flex-row md:items-end">
            <div className="font-bold ">{experience.title}</div>
            <div className="hidden md:flex md:pr-2">,</div>
            <div>{experience.company}</div>
          </div>
          <div>
            {experience.duration}, {experience.location}
          </div>
        </div>
        <TechStackBar techStack={experience.techStack} />
      </div>
      <CardDescription descriptions={experience.descriptions} />
    </div>
  );
};
