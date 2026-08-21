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
      classNames="flex flex-col items-center justify-center section-padding relative"
      id={id}
    >
      <ConstrainedBox classNames="relative z-10 w-full">
        <div className="mb-8">
          <SectionTitle>About Me</SectionTitle>
        </div>

        <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <article className="glass-panel p-8 sm:p-12 flex flex-col gap-6 rounded-3xl self-start">
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[var(--primaryColor)]/30">
                <Image
                  src="/darshilthummar.JPG"
                  alt="Darshil Thummar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold tracking-tight text-white mb-2">Darshil Thummar</h3>
                <p className="font-mono text-sm text-[var(--primaryColor)] uppercase tracking-widest">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <div className="space-y-6 text-[var(--textColorLight)] text-lg font-sans font-light leading-[1.8]">
              <p>
                I am a full stack developer focused on building scalable web
                products with clean architecture and fast UX. I care about
                thoughtful design, strong APIs, and maintainable codebases.
              </p>
              <p>
                My day-to-day stack revolves around MongoDB, Express, React, Node.js, and
                TypeScript. I enjoy building applications that feel smooth, dependable, and highly premium.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {techStack.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl hover:border-[var(--primaryColor)]/50 transition-colors"
                >
                  <Image src={icon} alt={`${name} logo`} width={24} height={24} />
                  <span className="text-sm font-medium text-white/90">{name}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                className="premium-button"
                href="/Darshil-Thummar-Resume.pdf"
                download="Darshil_Thummar_Resume.pdf"
                title="Download Resume"
              >
                Download Resume
              </a>
            </div>
          </article>

          <aside className="glass-panel p-8 sm:p-6 self-start rounded-3xl">
            <div className="mb-6">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--primaryColor)]">
                Education
              </p>
              <h3 className="font-display text-3xl font-bold mt-3 text-white">
                Academic Background
              </h3>
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
