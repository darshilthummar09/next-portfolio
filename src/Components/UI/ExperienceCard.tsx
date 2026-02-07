"use client";

import { IExperienceItem } from "../../interfaces";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface ExperienceCardProps {
  data: IExperienceItem[];
}

const ExperienceCard = ({ data }: ExperienceCardProps) => {
  return (
    <section className="w-full px-4 md:px-8 py-12 max-w-5xl mx-auto">
      <div className="relative pl-6 border-l border-white/10 space-y-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ amount: 0.3 }}
            className="relative"
          >
            <span className="absolute -left-[9px] top-6 h-4 w-4 rounded-full bg-[var(--primaryColor)] shadow-[0_0_0_6px_rgba(244,184,74,0.15)]" />
            <div className="section-surface p-6 md:p-7">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                {item.companyLink ? (
                  <Link href={item.companyLink} target="_blank">
                    {item.companyLogo && (
                      <Image
                        src={item.companyLogo}
                        alt={`${item.company} logo`}
                        width={72}
                        height={72}
                        className="w-18 h-18 object-contain rounded-lg flex-shrink-0"
                      />
                    )}
                  </Link>
                ) : null}

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <div>
                      <h3 className="text-2xl font-semibold text-[var(--primaryColor)]">
                        {item.position}
                      </h3>
                      <p className="text-lg font-medium text-[var(--textColor)] mt-1">
                        {item.company}
                      </p>
                    </div>
                    <span className="text-sm text-[var(--textColorLight)] whitespace-nowrap">
                      {item.startDate} - {item.endDate}
                    </span>
                  </div>

                  {item.location && (
                    <p className="text-sm text-[var(--textColorLight)] mt-2">
                      {item.location}
                    </p>
                  )}

                  <p className="text-base text-[var(--textColorLight)] leading-relaxed mt-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceCard;
