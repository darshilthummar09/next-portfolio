"use client";

import type { TimelineEntry } from "@/interfaces";
import React from "react";
import { motion } from "framer-motion";

const Education = ({ data }: { data: TimelineEntry }) => {
  return (
    <div className="w-full space-y-4">
      {data.educations.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          viewport={{ amount: 0.2 }}
          className="section-surface p-5 border border-white/10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-lg font-semibold text-[var(--primaryColor)]">
              {data.degree}
            </h3>
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--textColorLight)]">
              {item.startDate} - {item.endDate}
            </span>
          </div>
          <p className="text-sm text-[var(--textColorLight)] mt-2">
            {item.institute}
          </p>
          <p className="text-xs text-[var(--textColorLight)] mt-1">
            {item.location}
          </p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--textColorLight)]">
            {item?.cgpa ? "CGPA" : "Percentage"}:{" "}
            <span className="text-[var(--textColor)]">
              {item?.cgpa ? item.cgpa : item.percentage}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Education;
