import ExperienceCard from "../UI/ExperienceCard";
import experiences from "@/data/experience";
import ConstrainedBox from "../core/constrained-box";
import SectionTitle from "../common/SectionTitle";
import ResponsiveBox from "../core/ResponsiveBox";

const ExperienceSection = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="flex flex-col items-center justify-center section-padding relative bg-[var(--background)]"
      id={id}
    >
      <ConstrainedBox classNames="relative z-10 w-full">
        <div className="mb-8">
          <SectionTitle>Experience</SectionTitle>
          <p className="mt-3 text-[var(--textColorLight)] text-lg max-w-2xl font-light leading-relaxed">
            Roles and collaborations where I delivered production-ready web
            products, APIs, and interactive interfaces.
          </p>
        </div>
        
        <ExperienceCard data={experiences} />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default ExperienceSection;
