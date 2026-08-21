"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { INavItem } from "@/interfaces";
import DTMark from "./DTMark";

const sectionIdFromLink = (link: string) => {
  const id = link.replace("/#", "").replace("/", "");
  return id || "home";
};

const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: INavItem[];
  className?: string;
}) => {
  const [activeLink, setActiveLink] = useState<string>(navItems[0]?.link ?? "/");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Highlight whichever section is currently in view.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(sectionIdFromLink(item.link)))
      .filter((el): el is HTMLElement => !!el);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const matched = navItems.find(
            (item) => sectionIdFromLink(item.link) === entry.target.id
          );
          if (matched) setActiveLink(matched.link);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navItems]);

  // Solidify the bar's background once the user has scrolled past the hero.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-[5000] border-b transition-all duration-500",
          scrolled
            ? "border-[var(--primaryColor)]/15 bg-[var(--background)]/90 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.55)]"
            : "border-transparent bg-transparent",
          className
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between px-5 sm:px-8 lg:px-14 transition-all duration-500",
            scrolled ? "py-3" : "py-4 sm:py-5"
          )}
        >
          {/* Brand lockup — free-standing, not caged in a small badge */}
          <Link
            href="/"
            onClick={() => handleLinkClick(navItems[0]?.link ?? "/")}
            className="flex items-center gap-3 shrink-0 group"
            title="Darshil Thummar"
          >
            <DTMark className="w-10 h-10 sm:w-11 sm:h-11 text-[var(--primaryColor)] transition-transform duration-300 group-hover:scale-105" />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-base sm:text-lg tracking-[0.08em] text-white">
                DARSHIL<span className="text-[var(--primaryColor)]">.</span>
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/45 mt-1">
                SDE II
              </span>
            </span>
          </Link>

          {/* Desktop nav pill */}
          <div className="hidden sm:flex items-center gap-1 rounded-full border border-[var(--primaryColor)]/15 bg-[var(--background)]/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-2 py-2">
            {navItems.map((navItem, idx) => {
              const isActive = activeLink === navItem.link;
              return (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link}
                  onClick={() => handleLinkClick(navItem.link)}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase transition-colors duration-300",
                    isActive ? "text-black" : "text-white/70 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-[var(--primaryColor)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{navItem.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="sm:hidden relative w-10 h-10 flex items-center justify-center text-white rounded-full border border-[var(--primaryColor)]/20 bg-[var(--background)]/70 backdrop-blur-xl"
          >
            <span className="relative w-5 h-3.5 flex flex-col justify-between">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block h-[1.5px] w-full bg-current origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="block h-[1.5px] w-full bg-current"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block h-[1.5px] w-full bg-current origin-center"
              />
            </span>
          </button>
        </div>
      </motion.header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="sm:hidden fixed inset-0 z-[4998] bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="sm:hidden fixed top-[4.75rem] inset-x-4 z-[4999] rounded-3xl border border-[var(--primaryColor)]/20 bg-[var(--background)]/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-3"
            >
              {navItems.map((navItem, idx) => {
                const isActive = activeLink === navItem.link;
                return (
                  <Link
                    key={`mobile-link-${idx}`}
                    href={navItem.link}
                    onClick={() => handleLinkClick(navItem.link)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-2xl font-mono text-sm uppercase tracking-widest transition-colors",
                      isActive ? "bg-[var(--primaryColor)] text-black" : "text-white/80 hover:bg-white/5"
                    )}
                  >
                    <i className={navItem.icon} />
                    {navItem.name}
                  </Link>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNavbar;
