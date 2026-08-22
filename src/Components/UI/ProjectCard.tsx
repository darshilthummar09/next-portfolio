"use client";

import { RepoType, type IProjectItem } from "@/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";

const ProjectCard = ({ project, index }: { project: IProjectItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { damping: 20, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { damping: 20, stiffness: 100 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div 
      ref={ref} 
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative w-full h-full rounded-3xl overflow-hidden glass-panel border border-[var(--primaryColor)]/10 flex flex-col lg:flex-row transform-style-3d perspective-1200"
    >
      {/* Content Section */}
      <div className="w-full lg:w-1/2 p-5 lg:p-12 flex flex-col justify-center relative z-10 order-2 lg:order-1 bg-[var(--background)]/90 backdrop-blur-md transform-style-3d">

        <motion.div style={{ translateZ: 30 }} className="flex items-center gap-3 lg:gap-4 mb-2.5 lg:mb-5 preserve-3d">
          <span className="font-mono text-xs lg:text-sm text-[var(--primaryColor)] uppercase tracking-widest">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="h-[1px] w-8 lg:w-12 bg-[var(--primaryColor)]/30" />
          <div className={`px-2.5 lg:px-3 py-0.5 lg:py-1 rounded-full border text-[10px] lg:text-xs font-mono tracking-widest uppercase ${
            project.repoType === RepoType.Private
            ? "border-red-500/30 text-red-400 bg-red-500/10"
            : "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
          }`}>
            {project.repoType === RepoType.Private ? "Private" : "Public"}
          </div>
        </motion.div>

        <motion.h3 style={{ translateZ: 50 }} className="font-display text-lg sm:text-xl lg:text-3xl font-bold text-white mb-1.5 lg:mb-4 tracking-tight leading-tight group-hover:text-[var(--primaryColor)] transition-colors duration-500 preserve-3d">
          {project.title}
        </motion.h3>

        <motion.p style={{ translateZ: 20 }} className="text-[var(--textColorLight)] text-sm lg:text-base leading-relaxed font-light mb-2.5 lg:mb-6 max-w-xl preserve-3d line-clamp-2 lg:line-clamp-4">
          {project.description}
        </motion.p>

        {project.tags && project.tags.length > 0 && (
          <motion.div style={{ translateZ: 30 }} className="flex flex-wrap gap-1.5 lg:gap-2.5 mb-3 lg:mb-6 preserve-3d">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span key={`tag-${i}`} className="px-2.5 lg:px-3.5 py-1 lg:py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono text-[10px] lg:text-xs uppercase tracking-wider">
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="hidden lg:inline-flex px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 font-mono text-xs uppercase tracking-wider">
                +{project.tags.length - 3}
              </span>
            )}
          </motion.div>
        )}

        <div className="flex items-center gap-3 lg:gap-4 mt-auto relative z-30 pointer-events-auto">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="relative z-30 flex items-center justify-center w-9 h-9 lg:w-12 lg:h-12 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer pointer-events-auto shadow-md"
              aria-label={`${project.title} GitHub repository`}
            >
              <FontAwesomeIcon icon={faGithub} className="text-base lg:text-xl pointer-events-none" />
            </Link>
          )}
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="relative z-30 flex items-center gap-2 lg:gap-3 px-4 lg:px-6 h-9 lg:h-12 rounded-full bg-[var(--primaryColor)] text-black font-semibold text-sm lg:text-base hover:bg-[var(--primaryColorHover)] hover:-translate-y-1 transition-all duration-300 cursor-pointer pointer-events-auto shadow-md"
              aria-label={`View live demo of ${project.title}`}
            >
              <span className="pointer-events-none">View Live</span>
              <FontAwesomeIcon icon={faEye} className="pointer-events-none" />
            </Link>
          )}
        </div>
      </div>

      {/* Image Section */}
      <motion.div style={{ translateZ: -20 }} className="w-full lg:w-1/2 h-[160px] sm:h-[200px] lg:h-full relative overflow-hidden order-1 lg:order-2 preserve-3d bg-[#0c0c0c]">
        {project.screenshots && project.screenshots.length > 0 ? (
          <>
            {/* Browser-window frame around the real screenshot */}
            <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-8">
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.55)] bg-[#111]">
                <div className="flex items-center gap-1.5 h-7 px-3 bg-[#161616] border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="relative w-full h-[calc(100%-1.75rem)] overflow-hidden">
                  <Image
                    src={project.screenshots[0]}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover object-top grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Tech badge floating on the corner of the frame */}
            <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 w-9 h-9 rounded-lg bg-[#111] border border-white/10 p-1.5 shadow-lg">
              <Image src={project.icon} alt="" fill className="object-contain p-1.5" sizes="36px" />
            </div>
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(245,245,240,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,240,0.6) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.12),transparent_65%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-28 h-28 lg:w-40 lg:h-40 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                <Image
                  src={project.icon}
                  alt={project.title}
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.25)]"
                  sizes="200px"
                />
              </div>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
