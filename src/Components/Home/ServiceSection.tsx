import ConstrainedBox from "../core/constrained-box";
import ResponsiveBox from "../core/ResponsiveBox";
import SectionTitle from "../common/SectionTitle";
import { HoverGrid } from "../common/HoverGrid";
import services from "@/data/services";

const HomeSection2 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="section-shell min-h-screen items-center justify-center lg:px-32"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-20 relative z-10">
        <SectionTitle>Services</SectionTitle>
        <p className="text-center text-[var(--textColorLight)] max-w-2xl mx-auto">
          I design and build full stack solutions that move quickly from
          strategy to execution, with a focus on clean UI and reliable backend
          systems.
        </p>
        <HoverGrid cards={services} className="mt-12" />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection2;
