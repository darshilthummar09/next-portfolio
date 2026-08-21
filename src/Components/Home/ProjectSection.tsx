"use client";

import ConstrainedBox from "../core/constrained-box";
import ResponsiveBox from "../core/ResponsiveBox";
import SectionTitle from "../common/SectionTitle";
import ProjectList from "../UI/ProjectList";
import projects from "@/data/projects";

const ProjectSection = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="flex flex-col items-center justify-center section-padding relative bg-[var(--background)]"
      id={id}
      allowOverflow
    >
      <ConstrainedBox classNames="px-4 w-full relative z-10" allowOverflow>
        <div className="mb-8 text-center">
          <p className="font-mono text-sm text-[var(--primaryColor)] uppercase tracking-[0.3em] mb-3">Selected Work</p>
          <SectionTitle>Featured Projects</SectionTitle>
        </div>

        <ProjectList projects={projects} />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default ProjectSection;
