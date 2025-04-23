"use client";

import type { TimelineEntry } from "@/interfaces";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Education = ({ data }: { data: TimelineEntry }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 40%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height + 60]
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 2]);

  return (
    <div className="w-full mt-8 mb-8" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto">
        {/* Loop through the educations to create bullets */}
        {data.educations.map((item, index) => (
          <div key={index} className="relative flex items-start py-5">

            {/* Timeline Content */}
            <div className="mr-30 text-center">
              <h3 className="hidden md:block text-2xl font-bold text-[var(--primaryColor)] dark:text-[var(--primaryColor)] mb-4">
                {data.degree}
              </h3>
              <div>
                {item.institute} - {item.location}
              </div>
              <div>{item?.cgpa ? `CGPA` : `Percentage`} - {item?.cgpa ? item.cgpa : item.percentage}</div>
            </div>

            {/* Bullet Point */}
            <div className="absolute right-5 top-1/4 transform -translate-y-1/2 z-10 flex flex-col items-center">
              <div className="h-6 w-6 lg:h-8 lg:w-8 rounded-full flex items-center justify-center transition-all duration-300 bg-blue-900">
                <div className="h-3 w-3 lg:h-4 lg:w-4 p-1 lg:p-2 rounded-full bg-blue-600 dark:bg-blue-600 dark:border-blue-600" />
              </div>
            </div>
          </div>
        ))}

        {/* Static White Background for the Line */}
        <div
          className="absolute lg:right-8.5 right-7.5 top-0 w-[2px] bg-white"
          style={{ height: height + 60 }}
        />

        {/* Animated Progress Line */}
        <div className="absolute lg:right-8.5 right-7.5 top-0 overflow-hidden w-[2px]">
          <motion.div
            className="w-1 bg-gradient-to-b from-blue-600 to-blue-600"
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;