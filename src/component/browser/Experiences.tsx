import type { Experience } from "../../utils/card";
import { ExperienceCard } from "./Card";
import { pythonLogo } from "./TechStack";

export const Experiences = () => {
  const experiences: Experience[] = [
    {
      title: "Freelance Python Developer",
      company: "Contempo Limited",
      location: "Remote",
      duration: "Sep 2024 - June 2025",
      techStack: [pythonLogo],
      descriptions: [
        "Continue development on internal tooling developed during my internship",
        "Extending the software to be deployed to 11 teams.",
        "Developed internal tooling to compare the form and photo of 2 version of a PDF",
      ],
    },
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
