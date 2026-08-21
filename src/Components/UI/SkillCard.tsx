"use client";

import type { ISkillListItem } from "@/interfaces";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";

const SkillCard = ({ data, index }: { data: ISkillListItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 20, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 100 });

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
      initial={{ opacity: 0, y: 30, rotateX: -14 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      style={{ transformPerspective: 1000 }}
      className="w-full h-full"
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full p-8 glass-panel rounded-3xl flex flex-col group overflow-hidden relative transform-style-3d perspective-1200"
      >
        {/* Decorative background glow */}
        <div className="absolute -inset-4 bg-gradient-to-br from-[var(--primaryColor)]/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none" />

        <motion.h4 style={{ translateZ: 30 }} className="font-display text-2xl font-bold text-white mb-8 relative z-10 preserve-3d">
          {data.title}
        </motion.h4>

        {data.items.length > 0 ? (
          <motion.div style={{ translateZ: 20 }} className="flex flex-wrap gap-4 relative z-10 preserve-3d">
            {data.items.map((skill, i) => {
              return (
                <div
                  key={`skill-item-${i}`}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-full hover:border-[var(--primaryColor)] hover:bg-[var(--primaryColor)]/10 transition-all duration-300 transform hover:-translate-y-1 hover:translate-z-10"
                >
                  {skill.icon && (
                    <div className="w-5 h-5 relative flex-shrink-0">
                      <Image
                        src={skill.icon}
                        alt={`${skill.title} logo`}
                        fill
                        sizes="20px"
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  )}
                  <span className="font-mono text-xs uppercase tracking-wider text-white/80 group-hover:text-white">
                    {skill.title}
                  </span>
                </div>
              );
            })}
          </motion.div>
        ) : null}
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
