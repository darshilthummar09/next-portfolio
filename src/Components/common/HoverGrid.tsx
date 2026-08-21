"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { ServiceCard } from "../UI/ServiceCard";

export const HoverGrid = ({
  cards,
  className,
}: {
  cards: any[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full grid grid-cols-1 md:grid-cols-2 mt-4 gap-4",
        className
      )}
    >
      {cards.map((item, idx) => (
        <motion.div
          key={item?.id}
          initial={{ opacity: 0, y: 30, rotateX: -14 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ transformPerspective: 1000 }}
          className="relative group block p-2 h-full w-full"
        >
          <ServiceCard item={item} />
        </motion.div>
      ))}
    </div>
  );
};
