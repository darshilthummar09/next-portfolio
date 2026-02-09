import ConstrainedBox from "../core/constrained-box";
import ResponsiveBox from "../core/ResponsiveBox";
import GridBox from "../core/GridBox";
import SectionTitle from "../common/SectionTitle";
import SkillCard from "../UI/SkillCard";
import skills from "../../data/skills";

const SkillSection = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="section-shell min-h-screen items-center justify-center lg:px-32"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-20 relative z-10">
        <SectionTitle>Skills</SectionTitle>

        <GridBox classNames="justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skill, index) => {
            return <SkillCard key={`skill-${index}`} data={skill} />;
          })}
        </GridBox>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default SkillSection;
