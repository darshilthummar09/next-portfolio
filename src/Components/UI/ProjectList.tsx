"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { IProjectItem } from "@/interfaces";
import ProjectCard from "./ProjectCard";

const RECEDE_Y = -22; // px shift per stacked-behind level
const RECEDE_SCALE = 0.05; // scale reduction per stacked-behind level
const RECEDE_Z = 55; // translateZ reduction per stacked-behind level
const OFFSET_Y = 900; // px a card waits below the stage before its own entrance (clears the tallest — mobile — stage)

const StackedCard = ({
  project,
  index,
  total,
  progress,
  reduceTilt,
}: {
  project: IProjectItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduceTilt: boolean;
}) => {
  // Domain [0,1] split into `total` equal segments: segment i is the arrival of card i+1
  // (except the final segment, which is a pure hold/exit — no new arrival).
  const points = Array.from({ length: total + 1 }, (_, i) => i / total);
  const maxDepth = total - 1 - index; // how many cards can ever stack on top of this one

  const yVals: number[] = [];
  const scaleVals: number[] = [];
  const zVals: number[] = [];
  const rotateVals: number[] = [];
  const opacityVals: number[] = [];

  points.forEach((_, i) => {
    if (i < index) {
      // Waiting below the stage — not yet arrived.
      yVals.push(OFFSET_Y);
      scaleVals.push(0.95);
      zVals.push(-160);
      rotateVals.push(-6);
      opacityVals.push(1);
    } else {
      const depth = Math.min(i - index, maxDepth);
      yVals.push(depth * RECEDE_Y);
      scaleVals.push(1 - depth * RECEDE_SCALE);
      zVals.push(30 - depth * RECEDE_Z);
      rotateVals.push(depth === 0 ? 0 : Math.min(depth * 2, 6));
      opacityVals.push(depth === 0 ? 1 : Math.max(1 - depth * 0.1, 0.65));
    }
  });

  const y = useTransform(progress, points, yVals);
  const scale = useTransform(progress, points, scaleVals);
  const translateZ = useTransform(progress, points, zVals);
  const rotateX = useTransform(progress, points, rotateVals);
  const opacity = useTransform(progress, points, opacityVals);

  return (
    <motion.div
      style={{
        y,
        scale,
        translateZ,
        rotateX: reduceTilt ? 0 : rotateX,
        opacity,
        zIndex: index + 1,
      }}
      className="absolute inset-0 preserve-3d"
    >
      <ProjectCard project={project} index={index} />
    </motion.div>
  );
};

const ProjectList = ({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [reduceTilt, setReduceTilt] = useState(false);
  const total = projects.length;

  useEffect(() => {
    setReduceTilt(window.matchMedia("(max-width: 767px)").matches);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 300, damping: 40, mass: 0.6 });

  // One screen to settle on the first card, ~0.9 screens per additional card's
  // entrance, plus a comfortable hold before the section releases to normal scroll.
  const sectionHeight = `${100 + (total - 1) * 90 + 50}vh`;

  return (
    <div ref={sectionRef} className="relative" style={{ height: sectionHeight }}>
      <div className="sticky top-20 lg:top-28 w-full px-4">
        <div
          className="relative w-full max-w-[min(92vw,1100px)] mx-auto h-[420px] sm:h-[460px] lg:h-[520px] preserve-3d"
          style={{ perspective: 1400 }}
        >
          {projects.map((project, index) => (
            <StackedCard
              key={index}
              project={project}
              index={index}
              total={total}
              progress={progress}
              reduceTilt={reduceTilt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
