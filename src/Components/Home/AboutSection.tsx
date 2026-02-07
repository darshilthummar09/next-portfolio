"use client";

import ResponsiveBox from "../core/ResponsiveBox";
import ConstrainedBox from "../core/constrained-box";
import SectionTitle from "../common/SectionTitle";
import education from "../../data/education";
import Education from "../UI/Education";
import Image from "next/image";

const techStack = [
  { name: "MongoDB", icon: "/skills/mongodb.svg" },
  { name: "Express", icon: "/skills/express.svg" },
  { name: "React", icon: "/skills/react.svg" },
  { name: "Node.js", icon: "/skills/nodejs.svg" },
  { name: "TypeScript", icon: "/skills/typescript.svg" },
  { name: "Firebase", icon: "/skills/firebase.svg" },
];

const AboutSection = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="section-shell items-center justify-center lg:px-32"
      id={id}
    >
      <ConstrainedBox classNames="py-20 relative z-10">
        <SectionTitle>About me</SectionTitle>

        <section className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
          <article className="section-surface p-6 sm:p-8 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-white/15">
                <Image
                  src="/darshilthummar.JPG"
                  alt="Darshil Thummar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Darshil Thummar</h3>
                <p className="text-sm text-[var(--textColorLight)]">
                  Full Stack Developer - MERN and Next.js
                </p>
              </div>
            </div>

            <div className="space-y-4 text-[var(--textColorLight)] text-base leading-relaxed">
              <p>
                I am a full stack developer focused on building scalable web
                products with clean architecture and fast UX. I care about
                thoughtful design, strong APIs, and maintainable codebases.
              </p>
              <p>
                My day-to-day stack is MongoDB, Express, React, Node.js, and
                TypeScript. I enjoy building dashboards, product sites, and
                platform features that feel smooth and dependable.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {techStack.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 section-surface px-3 py-3"
                >
                  <Image src={icon} alt={`${name} logo`} width={28} height={28} />
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>

            <a
              className="inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primaryColor)] text-black font-semibold shadow-[0_10px_24px_rgba(244,184,74,0.35)] hover:translate-y-[-2px] transition"
              href="/Darshil Thummar.pdf"
              download="Darshil_Thummar_Resume.pdf"
              title="Download Resume"
            >
              Download resume
            </a>
          </article>

          <aside className="section-surface p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Education</h3>
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--textColorLight)]">
                Timeline
              </span>
            </div>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <Education key={`education-${i}`} data={edu} />
              ))}
            </div>
          </aside>
        </section>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default AboutSection;
