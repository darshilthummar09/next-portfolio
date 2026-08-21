import ConstrainedBox from "../core/constrained-box";
import ResponsiveBox from "../core/ResponsiveBox";
import SectionTitle from "../common/SectionTitle";
import { HoverGrid } from "../common/HoverGrid";
import services from "@/data/services";

const HomeSection2 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="flex flex-col items-center justify-center section-padding relative bg-[var(--background)]"
      id={id}
    >
      <ConstrainedBox classNames="relative z-10 w-full">
        <div className="mb-8">
          <SectionTitle>Services</SectionTitle>
          <p className="mt-3 text-[var(--textColorLight)] text-lg max-w-2xl font-light leading-relaxed">
            I design and build full stack solutions that move quickly from
            strategy to execution, with a focus on clean UI and reliable backend
            systems.
          </p>
        </div>
        <HoverGrid cards={services} />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection2;
