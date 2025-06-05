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
    {
      title: "Portfolio",
      url: "https://www.fergus-lai.dev/",
      descriptions: [
        "The site you are on right now",
        "Inspired by Linux Terminal",
        "User access information via Linux style command",
        "Frontend Deployed on Vercel",
        "Backend Deployed on Render",
        "Frontend Repo https://github.com/Fergus-Lai/portfolio-frontend",
        "Backend Repo https://github.com/Fergus-Lai/portfolio-backend",
      ],
    },
    {
      title: "Roguelike FPS Game",
      descriptions: [
        "Created a FPS Dungeon Crawler Roguelike Game in Unity",
        "Procedurally generating the enemy according to player's parameter",
        "Designed Genetic algorithm to modify enemy parameter",
        "Battle simulation to evaluate enemy generated",
        "Adjust simulation according to player's ability",
      ],
    },
  ];
  return (
    <div className="flex flex-col w-full divide-y divide-zinc-600">
      {projects.map((element, i) => (
        <ProjectCard project={element} key={i} />
      ))}
    </div>
  );
};
