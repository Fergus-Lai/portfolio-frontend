import type { Project } from "../../utils/card";
import { ProjectCard } from "./Card";

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Ultimate Tic Tac Toe",
      url: "https://utt.fergus-lai.dev",
      descriptions: [
        "React Implementation of the Ultimate Tic Tac Toe Game",
        "Implemented multiplayer using WebSocket with Socket.io",
        "Frontend Deployed on Vercel",
        "Backend Deployed on Render",
        "Frontend Repo https://github.com/Fergus-Lai/ultimate-tic-tac-toe-frontend",
        "Backend Repo https://github.com/Fergus-Lai/ultimate-tic-tac-toe-backend",
      ],
    },
  ];
  return (
    <div className="flex flex-col w-full">
      {projects.map((element, i) => (
        <ProjectCard project={element} key={i} />
      ))}
    </div>
  );
};
