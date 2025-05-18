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
    <section className="w-full px-4 md:px-8 py-16 max-w-6xl mx-auto overflow-x-hidden">
      <div className="relative">

        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ amount: 0.3 }}
              className={`
                relative
                w-full
                md:w-[100%]
                mx-4 md:mx-0
                mb-10 last:mb-0
                pt-8 md:pt-0
                box-border
              `}
              style={{
                marginLeft: !isLeft ? "auto" : undefined,
                right: !isLeft ? 0 : undefined,
              }}
            >

              {/* Experience card */}
              <div
                className={`
                  border border-[rgba(255,255,255,0.50)]
                  p-3 md:p-8
                  transition-all duration-300
                  ${
                    isLeft
                      ? "md:mr-10 md:ml-0 transform translate-x-[-14px]"
                      : "md:ml-10 md:mr-0 transform md:translate-x-40"
                  }
                `}
              >
                <div className="flex flex-col sm:flex-row items-start gap-3">
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
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-3">
                      <div>
                        <h3 className="text-2xl font-semibold text-[var(--primaryColor)]">
                          {item.position}
                        </h3>
                        <p className="text-lg font-medium text-[var(--textColor)] mt-1 truncate">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <span className="text-sm text-[var(--textColor)] opacity-80 whitespace-nowrap mt-1 sm:mt-0 mx-1">
                      {item.startDate} - {item.endDate}
                    </span>

                    {item.location && (
                      <p className="text-sm text-[var(--textColor)] opacity-80 mt-3 truncate">
                        📍 {item.location}
                      </p>
                    )}

                    <p className="text-base text-[var(--textColor)] leading-relaxed mt-5 text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceCard;
