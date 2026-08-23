"use client";

import { RepoType, type IProjectItem } from "@/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";

interface ProjectCardProps {
  project: IProjectItem;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth 3D tilt spring
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 120, damping: 18 });
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), { stiffness: 120, damping: 18 });
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), { stiffness: 120, damping: 18 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full rounded-3xl overflow-hidden glass-panel border border-[var(--primaryColor)]/15 hover:border-[var(--primaryColor)]/45 transition-all duration-500 bg-[#0c0c0e]/95 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)] p-6 sm:p-8 lg:p-10"
    >
      {/* 3D Dynamic Cursor-tracking Spotlight Glare */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([x, y]) =>
              `radial-gradient(600px circle at ${x}% ${y}%, rgba(212, 175, 55, 0.12), transparent 45%)`
          ),
        }}
      />

      {/* Ambient background gold glow */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-[var(--primaryColor)]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[var(--primaryColor)]/10 transition-all duration-700" />

      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center relative z-10`}>
        
        {/* Information Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          
          {/* Header Tag Bar */}
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <span className="font-mono text-sm text-[var(--primaryColor)] font-bold tracking-widest">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="h-[1px] w-10 bg-[var(--primaryColor)]/30" />
            <span className={`px-3 py-0.5 rounded-full border text-xs font-mono tracking-widest uppercase ${
              project.repoType === RepoType.Private
                ? "border-red-500/30 text-red-400 bg-red-500/10"
                : "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
            }`}>
              {project.repoType === RepoType.Private ? "Private" : "Public"}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight leading-tight group-hover:text-[var(--primaryColor)] transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-[var(--textColorLight)] text-sm sm:text-base leading-relaxed font-light mb-6">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, i) => (
                <span
                  key={`tag-${i}`}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono text-xs uppercase tracking-wider hover:border-[var(--primaryColor)]/30 hover:text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-auto pt-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[var(--primaryColor)] text-black font-semibold text-sm hover:bg-[var(--primaryColorHover)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shadow-lg"
                title={`Open Live Demo of ${project.title}`}
              >
                <FontAwesomeIcon icon={faEye} />
                <span>Live Preview</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/20 hover:border-white text-white hover:bg-white hover:text-black font-medium text-sm transition-all duration-300 cursor-pointer shadow-md"
                title={`Open ${project.title} GitHub Repository`}
              >
                <FontAwesomeIcon icon={faGithub} className="text-base" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Browser Mockup Image Preview Column */}
        <div className="w-full lg:w-1/2">
          <div
            className="group/img block relative w-full h-[240px] sm:h-[300px] lg:h-[340px] rounded-2xl overflow-hidden border border-white/10 bg-[#141416] hover:border-[var(--primaryColor)]/50 transition-all duration-500 shadow-2xl"
          >
            {/* Browser top bar */}
            <div className="flex items-center justify-between h-9 px-4 bg-[#1b1b1f] border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-0.5 rounded-full bg-black/40 border border-white/5 font-mono text-[11px] text-white/50 max-w-[220px] truncate">
                <span className="text-[var(--primaryColor)] text-[10px]">🔒</span>
                <span className="truncate">{project.url ? new URL(project.url).hostname : "github.com"}</span>
              </div>
              <div className="w-8" />
            </div>

            {/* Screenshot or fallback */}
            <div className="relative w-full h-[calc(100%-2.25rem)] overflow-hidden bg-[#0a0a0c]">
              {project.screenshots && project.screenshots.length > 0 ? (
                <Image
                  src={project.screenshots[0]}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover object-top grayscale-[10%] group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.12),transparent_65%)]">
                  <div className="relative w-24 h-24 opacity-80 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-700">
                    <Image src={project.icon} alt={project.title} fill className="object-contain" sizes="100px" />
                  </div>
                </div>
              )}

              {/* Tech logo badge in corner */}
              <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-[#111]/90 backdrop-blur-md border border-white/10 p-2 shadow-lg z-10 group-hover/img:scale-110 group-hover/img:border-[var(--primaryColor)]/40 transition-all duration-300">
                <Image src={project.icon} alt="" fill className="object-contain p-2" sizes="40px" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;
