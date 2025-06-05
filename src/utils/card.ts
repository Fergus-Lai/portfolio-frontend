import type { TechStackLogo } from "../component/browser/TechStack";

export interface Project {
  title: string;
  url?: string;
  descriptions: string[];
  techStack: TechStackLogo[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  descriptions: string[];
  techStack: TechStackLogo[];
}
