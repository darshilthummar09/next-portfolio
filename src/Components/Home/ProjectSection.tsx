"use client";

import ConstrainedBox from "../core/constrained-box";
import ResponsiveBox from "../core/ResponsiveBox";
import SectionTitle from "../common/SectionTitle";
import ProjectList from "../UI/ProjectList";
import projects from "@/data/projects";
import { motion } from "framer-motion";

const ProjectSection = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="flex flex-col items-center justify-center section-padding relative bg-[var(--background)] overflow-hidden"
      id={id}
    >
      {/* 3D Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating 3D Geometric Ring 1 */}
        <motion.div
          animate={{
            rotate: [0, 360],
            y: [0, -25, 0],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-[var(--primaryColor)]/10 opacity-30 blur-[1px]"
          style={{ transform: "rotateX(60deg) rotateY(20deg)" }}
        />

        {/* Floating 3D Geometric Ring 2 */}
        <motion.div
          animate={{
            rotate: [360, 0],
            y: [0, 30, 0],
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/2 -right-32 w-[450px] h-[450px] rounded-full border border-[var(--primaryColor)]/10 opacity-20 blur-[1px]"
          style={{ transform: "rotateX(65deg) rotateY(-25deg)" }}
        />

        {/* Subtle Ambient Radial Light Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--primaryColor)]/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[var(--primaryColor)]/[0.02] rounded-full blur-3xl pointer-events-none" />
      </div>

      <ConstrainedBox classNames="px-4 w-full relative z-10">
        <div className="mb-12 sm:mb-16 text-center">
          <p className="font-mono text-xs sm:text-sm text-[var(--primaryColor)] uppercase tracking-[0.3em] mb-3">
            Selected Work
          </p>
          <SectionTitle>Featured Projects</SectionTitle>
        </div>

        <ProjectList projects={projects} />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default ProjectSection;
