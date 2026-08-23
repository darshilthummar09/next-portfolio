"use client";

import { IProjectItem } from "@/interfaces";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  return (
    <div className="flex flex-col gap-10 lg:gap-14 w-full max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id || project.title || index}
          project={project}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProjectList;
