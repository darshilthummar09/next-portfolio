import React from 'react'
import ResponsiveBox from '../core/ResponsiveBox'
import ConstrainedBox from '../core/constrained-box'
import SectionTitle from '../common/SectionTitle'
import education from '../../data/education'
import Education from '../UI/Education'

const AboutSection = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center lg:px-40"
      id={id}
    >
      <ConstrainedBox classNames="py-12">
        <SectionTitle>About me</SectionTitle>

        <div className="w-full flex flex-col md:flex-row justify-between space-x-4">
        <span className='block md:hidden py-8'><SectionTitle>Educations</SectionTitle></span>
          <div className="flex-1 p-6">
            {education.map((edu, i) => (
              <Education key={`education-${i}`} data={edu} />
            ))}
          </div>
          <div className="flex-1 p-6">
          <SectionTitle id="about-title">Who I Am</SectionTitle>
          <article
              //  className="mt-6 text-xl leading-relaxed text-gray-800 dark:text-gray-200"
               className="mt-6 text-xl leading-relaxed text-gray-800 dark:text-gray-200 indent-8"
               itemScope
               itemType="http://schema.org/Person"
             >
               <p>
                 Hi, my name is <strong itemProp="name">Darshil Thummar</strong>.
                 I'm a dedicated and detail-oriented{" "}
                 <strong itemProp="jobTitle">Full Stack Developer</strong>{" "}
                 specializing in the <strong>MERN stack</strong> (MongoDB,
                 Express.js, React.js, and Node.js).
               </p>
               <p className="mt-4">
                 I develop dynamic, scalable web apps, blending intuitive UI
                 design with powerful backend logic. I build rich user
                 experiences with React.js and Redux Toolkit and create
                 high-performance APIs with Node.js and Sequelize.
               </p>
               <p className="mt-4">
                 My portfolio includes projects in AI, e-commerce, and content
                 management systems. I’m passionate about clean code,
                 performance, and solving real-world problems with technology.
               </p>
               <p className="mt-4">
                 I'm currently pursuing a{" "}
                 <span itemProp="alumniOf">
                   Master's in Computer Applications
                 </span>{" "}
                 (MCA), and I stay up-to-date with the latest technologies and
                 best practices.
               </p>
             </article>
          </div>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  )
}

export default AboutSection
