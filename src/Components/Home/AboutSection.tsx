"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ResponsiveBox from "../core/ResponsiveBox";
import ConstrainedBox from "../core/constrained-box";
import SectionTitle from "../common/SectionTitle";
import education from "../../data/education";
import Education from "../UI/Education";
import Image from "next/image";
import Head from "next/head";

const techStack = [
  { name: "MongoDB", icon: "/skills/mongodb.svg" },
  { name: "Express", icon: "/skills/express.svg" },
  { name: "React", icon: "/skills/react.svg" },
  { name: "Node.js", icon: "/skills/nodejs.svg" },
  { name: "TypeScript", icon: "/skills/typescript.svg" },
  { name: "Firebase", icon: "/skills/firebase.svg" },
  { name: "Supabase", icon: "/skills/supabase.svg" }, // ✅ Added
  { name: "n8n Automation", icon: "/skills/n8n.svg" }, // ✅ Added
];

const AboutSection = ({ id }: { id: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Head>
        <title>Darshil Thummar | Full Stack MERN Developer</title>
        <meta
          name="description"
          content="Darshil Thummar is a Full Stack Developer specializing in the MERN stack, Next.js, TypeScript, Supabase, and n8n Automation workflows. Passionate about building scalable web applications."
        />
        <meta property="og:title" content="Darshil Thummar | Full Stack Developer" />
        <meta
          property="og:description"
          content="Explore Darshil Thummar's work as a MERN Stack Developer, experienced in React, Node.js, Supabase, and n8n Automation workflows."
        />
        <meta property="og:image" content="/darshilthummar.JPG" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Darshil Thummar",
              jobTitle: "Full Stack Developer",
              url: "https://darshilthummar.vercel.app",
              image: "https://darshilthummar.vercel.app/darshilthummar.JPG",
              sameAs: [
                "https://github.com/darshilthummar09",
                "https://www.linkedin.com/in/darshil-thummar-50bb8b216",
              ],
              knowsAbout: [
                "JavaScript",
                "React",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "Express",
                "Supabase",
                "n8n Automation"
              ],
            }),
          }}
        />
      </Head>

      <ResponsiveBox
        classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] items-center justify-center lg:px-40"
        id={id}
      >
        <ConstrainedBox classNames="py-16">
          <SectionTitle>About me</SectionTitle>
          <section className="w-full flex flex-col md:flex-row justify-between gap-8">
            <article className="flex-1 p-6 flex flex-col gap-8 my-auto">
              <motion.header
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-6"
              >
                <button
                  aria-label="View full profile image"
                  className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-[var(--primaryColor)]"
                  onClick={toggleModal}
                >
                  <Image
                    src="/darshilthummar.JPG"
                    alt="Darshil Thummar - Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </button>
                <div>
                  <h1 className="text-2xl font-bold text-[var(--primaryColor)] mb-1">
                    Darshil Thummar
                  </h1>
                  <p className="text-lg text-white">
                    Full Stack Developer <br />
                    <span className="text-base text-white">
                      MERN | Next.js | TypeScript | Supabase | n8n
                    </span>
                  </p>
                </div>
              </motion.header>

              {/* Modal */}
              {isModalOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                  role="dialog"
                  aria-modal="true"
                >
                  <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                    <button
                      className="absolute top-2 right-2 text-white rounded-full p-2 hover:text-gray-700 transition"
                      onClick={toggleModal}
                      aria-label="Close image modal"
                    >
                      ✖
                    </button>
                    <Image
                      src="/darshilthummar.JPG"
                      alt="Full-size profile image of Darshil Thummar"
                      width={500}
                      height={500}
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <p className="mb-4 text-xl leading-relaxed text-white">
                  I’m a passionate{" "}
                  <span className="font-semibold text-[var(--primaryColor)]">
                    Full Stack Web Developer
                  </span>{" "}
                  focused on building scalable web experiences. I specialize in the{" "}
                  <strong className="text-[var(--primaryColor)]">MERN stack</strong> and enjoy turning ideas into digital products with clean code and great UX. <br /><br />
                  Along with that, I work with{" "}
                  <strong className="text-[var(--primaryColor)]">Supabase</strong> for modern backend solutions and{" "}
                  <strong className="text-[var(--primaryColor)]">n8n Automation Workflows</strong> to automate processes and connect different systems seamlessly.
                </p>
                <p className="text-lg text-blue-100">
                  Always learning, always building. Proficient with React, Node.js, TypeScript, Supabase, and workflow automations using n8n.
                </p>
              </motion.section>

              <motion.div
                className="flex flex-wrap gap-4 mt-2 justify-start sm:justify-center lg:justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                {techStack.map(({ name, icon }) => (
                  <motion.div
                    key={name}
                    className="w-25 h-20 bg-white/10 p-3 rounded-xl flex flex-col items-center justify-center shadow-lg hover:scale-110 transition"
                    whileHover={{ scale: 1.15, rotate: -5 }}
                  >
                    <Image
                      src={icon}
                      alt={`${name} logo`}
                      width={32}
                      height={32}
                    />
                    <span className="text-xs mt-2 text-white text-center">{name}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="mt-8 flex justify-center"
              >
                <a
                  className="inline-block bg-gradient-to-r from-[var(--primaryColor60)] to-indigo-600 hover:from-[var(--primaryColor90)] hover:to-[var(--primaryColor60)] transition text-white font-semibold py-3 px-6 rounded-lg shadow-md"
                  href="/Darshil Thummar.pdf"
                  download="Darshil_Thummar_Resume.pdf"
                  title="Download Resume"
                >
                  📄 Download My Resume
                </a>
              </motion.div>
            </article>

            <aside className="flex-1 p-6">
              <span className="block md:hidden py-8">
                <SectionTitle>Education</SectionTitle>
              </span>
              {education.map((edu, i) => (
                <Education key={`education-${i}`} data={edu} />
              ))}
            </aside>
          </section>
        </ConstrainedBox>
      </ResponsiveBox>
    </>
  );
};

export default AboutSection;
