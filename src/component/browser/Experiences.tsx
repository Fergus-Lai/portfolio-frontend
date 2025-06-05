import type { Experience } from "../../utils/card";
import { ExperienceCard } from "./Card";
import { pythonLogo } from "./TechStack";

export const Experiences = () => {
  const experiences: Experience[] = [
    {
      title: "Software Enginner Intern",
      company: "Contempo Limited",
      location: "Hong Kong",
      duration: "July 2024 - Sep 2024",
      techStack: [pythonLogo],
      descriptions: [
        "Tasked to design and develop internal tooling for merchandising team",
        "Automated data validation between purchasing order pdf file and spreadsheet",
      ],
    },
  ];
  return (
    <div className="flex flex-col w-full divide-y divide-zinc-600">
      {experiences.map((element, i) => (
        <ExperienceCard experience={element} key={i} />
      ))}
    </div>
  );
};
