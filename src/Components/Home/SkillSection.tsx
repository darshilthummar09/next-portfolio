import ConstrainedBox from "../core/constrained-box";
import ResponsiveBox from "../core/ResponsiveBox";
import GridBox from "../core/GridBox";
import SectionTitle from "../common/SectionTitle";
import SkillCard from "../UI/SkillCard";
import skills from "../../data/skills";

const SkillSection = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="flex flex-col items-center justify-center section-padding relative bg-[var(--background)]"
      id={id}
    >
      <ConstrainedBox classNames="relative z-10 w-full">
        <div className="mb-8">
          <SectionTitle>Technical Arsenal</SectionTitle>
        </div>

        <GridBox classNames="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {skills.map((skill, index) => {
            return <SkillCard key={`skill-${index}`} data={skill} index={index} />;
          })}
        </GridBox>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default SkillSection;
