import { ProjectCard1 } from "./projectCard1";
import { ProjectCard2 } from "./projectCard2";

export function ProjectCards() {
  return (
    <div className="flex flex-col lg:flex-row opacity-0 animate-fadeIn [animation-delay:2s] justify-center">
      <ProjectCard1 />
      <ProjectCard2 />
    </div>
  );
}