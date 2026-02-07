"use client";

import type { TimelineEntry } from "@/interfaces";
import React from "react";
import { motion } from "framer-motion";

const Education = ({ data }: { data: TimelineEntry }) => {
  return (
    <div className="w-full">
      <div className="grid sm:grid-cols-2 gap-4">
        {data.educations.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ amount: 0.2 }}
            className="section-surface p-4"
          >
            <h3 className="text-base font-semibold text-[var(--primaryColor)]">
              {data.degree}
            </h3>
            <p className="text-sm text-[var(--textColorLight)] mt-2">
              {item.institute} - {item.location}
            </p>
            <p className="text-xs text-[var(--textColorLight)] mt-2">
              {item.startDate} - {item.endDate}
            </p>
            <p className="text-xs text-[var(--textColorLight)] mt-1">
              {item?.cgpa ? "CGPA" : "Percentage"} -{" "}
              {item?.cgpa ? item.cgpa : item.percentage}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
