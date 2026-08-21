"use client";

import { IExperienceItem } from "../../interfaces";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";

interface ExperienceCardProps {
  data: IExperienceItem[];
}

const SingleExperienceCard = ({ item, index }: { item: IExperienceItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isCurrent = item.endDate?.toLowerCase() === "present";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { damping: 20, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { damping: 20, stiffness: 100 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -14 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      style={{ transformPerspective: 1000 }}
      className="w-full"
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative w-full h-auto min-h-[420px] lg:h-[420px] rounded-3xl overflow-hidden glass-panel border border-[var(--primaryColor)]/10 flex flex-col lg:flex-row transform-style-3d perspective-1200"
      >
        {/* Content */}
        <div className="w-full lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center relative z-10 order-2 lg:order-1 bg-[var(--background)]/90 backdrop-blur-md transform-style-3d">
          <motion.div style={{ translateZ: 30 }} className="flex items-center gap-4 mb-6 preserve-3d">
            <span className="font-mono text-sm text-[var(--primaryColor)] uppercase tracking-widest">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="h-[1px] w-12 bg-[var(--primaryColor)]/30" />
            {isCurrent ? (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--primaryColor)]/40 bg-[var(--primaryColor)]/10 text-xs font-mono tracking-widest uppercase text-[var(--primaryColor)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primaryColor)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--primaryColor)]" />
                </span>
                Current Role
              </div>
            ) : (
              <div className="px-3 py-1 rounded-full border border-white/15 text-xs font-mono tracking-widest uppercase text-white/50">
                Past Role
              </div>
            )}
          </motion.div>

          <motion.h3
            style={{ translateZ: 50 }}
            className="font-display text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-[var(--primaryColor)] transition-colors duration-500 preserve-3d"
          >
            {item.position}
          </motion.h3>

          <motion.p
            style={{ translateZ: 40 }}
            className="font-mono text-sm text-[var(--primaryColor)]/90 uppercase tracking-widest mb-5 preserve-3d"
          >
            {item.company}
          </motion.p>

          <motion.div style={{ translateZ: 30 }} className="flex flex-wrap items-center gap-3 mb-6 preserve-3d">
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--textColorLight)] font-mono text-xs uppercase tracking-widest">
              {item.startDate} – {isCurrent ? "Present" : item.endDate}
            </span>
            {item.location && (
              <span className="text-xs text-[var(--textColorLight)]/70 uppercase tracking-widest font-mono">
                {item.location}
              </span>
            )}
          </motion.div>

          <motion.p
            style={{ translateZ: 20 }}
            className="text-[var(--textColorLight)] text-[15px] leading-[1.75] font-light preserve-3d line-clamp-4 lg:line-clamp-5"
          >
            {item.description}
          </motion.p>
        </div>

        {/* Brand panel */}
        <motion.div
          style={{ translateZ: -20 }}
          className="w-full lg:w-2/5 h-[220px] lg:h-full relative overflow-hidden order-1 lg:order-2 preserve-3d bg-[#0c0c0c] flex items-center justify-center"
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(245,245,240,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,240,0.6) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.14),transparent_65%)]" />

          <span className="absolute inset-0 flex items-center justify-center font-display text-[6rem] lg:text-[8rem] font-black text-white/[0.03] uppercase select-none pointer-events-none leading-none text-center px-4">
            {item.company.slice(0, 2)}
          </span>

          {item.companyLink ? (
            <Link
              href={item.companyLink}
              target="_blank"
              className="relative w-24 h-24 lg:w-32 lg:h-32 bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:border-[var(--primaryColor)]/50 transition-all duration-500 group-hover:scale-105"
            >
              {item.companyLogo && (
                <Image src={item.companyLogo} alt={`${item.company} logo`} fill className="object-contain p-2" />
              )}
            </Link>
          ) : (
            item.companyLogo && (
              <div className="relative w-24 h-24 lg:w-32 lg:h-32">
                <Image src={item.companyLogo} alt={`${item.company} logo`} fill className="object-contain" />
              </div>
            )
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ExperienceCard = ({ data }: ExperienceCardProps) => {
  return (
    <section className="w-full flex flex-col gap-6 lg:gap-8">
      {data.map((item, index) => (
        <SingleExperienceCard key={index} item={item} index={index} />
      ))}
    </section>
  );
};

export default ExperienceCard;
