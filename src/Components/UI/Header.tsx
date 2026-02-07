"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { INavItem } from "@/interfaces";
import Row from "../core/Row";

const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: INavItem[];
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-fit fixed top-6 inset-x-0 mx-auto border border-white/10 rounded-full bg-[var(--dialogColor50)] backdrop-blur-xl shadow-[0_12px_30px_rgba(2,6,23,0.35)] z-[5000] px-6 py-3 items-center space-x-4",
          className
        )}
      >
        <Row classNames="w-full justify-center items-center">
          <Row classNames="gap-4 items-center">
            {navItems.map((navItem: INavItem, idx: number) => (
              <span key={`link=${idx}`}>
                <Link
                  href={navItem.link}
                  className={cn(
                    "relative flex items-center space-x-1 text-[var(--textColor)] group"
                  )}
                >
                  {/* Icon for mobile view */}
                  <span className="block sm:hidden relative overflow-hidden">
                    <span className="relative z-10 text-xl">
                      <i
                        className={navItem.icon}
                        id={`nav-item-icon${idx}`}
                        title={navItem.name}
                      />
                    </span>
                    <span className="absolute inset-0 text-[var(--primaryColor)] transition-transform transform translate-y-full group-hover:translate-y-0 duration-300 ease-in-out z-10 text-xl">
                      <i
                        className={navItem.icon}
                        id={`nav-item-icon${idx}-hover`}
                        title={navItem.name}
                      />
                    </span>
                  </span>

                  {/* Icon with text for larger screens */}
                  <span className="hidden sm:block text-xs lg:text-sm font-semibold tracking-[0.16em] uppercase relative overflow-hidden">
                    <span className="relative z-10">{navItem.name}</span>
                    <span className="absolute inset-0 text-[var(--primaryColor)] transition-transform transform translate-y-full group-hover:translate-y-0 duration-300 ease-in-out z-10">
                      {navItem.name}
                    </span>
                  </span>
                </Link>
              </span>
            ))}
          </Row>
        </Row>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNavbar;
