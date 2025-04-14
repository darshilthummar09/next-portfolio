import React from "react";
import ResponsiveBox from "../core/ResponsiveBox";
import ConstrainedBox from "../core/constrained-box";
import SectionTitle from "../common/SectionTitle";
import education from "../../data/education";
import Education from "../UI/Education";

const AboutSection = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="py-12">
        <SectionTitle>About me</SectionTitle>

        <div className="w-full flex flex-col md:flex-row justify-between space-x-4">
          <div className="flex-1 p-6">
            <p className="mt-20 text-xl">
              Hi, my name is Darshil Thummar. I'm a dedicated and
              detail-oriented Full Stack Developer specializing in the MERN
              stack (MongoDB, Express.js, React.js, and Node.js). With hands-on
              experience in developing dynamic and scalable web applications, I
              bring a strong blend of frontend finesse and backend logic to
              every project I take on. From crafting seamless user interfaces
              with React.js and Redux Toolkit to designing robust APIs with
              Node.js and Sequelize, I focus on performance optimization,
              intuitive UX, and clean, maintainable code. I’ve contributed to
              diverse projects—ranging from AI-powered platforms to e-commerce
              and CMS solutions—demonstrating my adaptability and
              problem-solving skills in real-world environments. I hold a
              Master's in Computer Applications (MCA) and continuously strive to
              stay ahead by embracing modern technologies, tools, and best
              practices. Whether it’s collaborating with cross-functional teams
              or building something from the ground up, I’m passionate about
              turning ideas into impactful digital experiences.
            </p>
          </div>

          <div className="flex-1 p-6">
            {education.map((edu, i) => (
              <Education key={`education-${i}`} data={edu} />
            ))}
          </div>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default AboutSection;
