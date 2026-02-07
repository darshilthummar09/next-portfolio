import ExperienceCard from "../UI/ExperienceCard";
import experiences from "@/data/experience";
import ConstrainedBox from "../core/constrained-box";
import SectionTitle from "../common/SectionTitle";
import ResponsiveBox from "../core/ResponsiveBox";

const ExperienceSection = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="section-shell items-center justify-center lg:px-32"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-20 relative z-10">
        <SectionTitle>Experience</SectionTitle>
        <p className="text-center text-[var(--textColorLight)] max-w-2xl mx-auto">
          Roles and collaborations where I delivered production-ready web
          products, APIs, and interactive interfaces.
        </p>
        <ExperienceCard data={experiences} />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default ExperienceSection;
