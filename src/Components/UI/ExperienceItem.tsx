import type { IExperienceItem } from "@/interfaces/index";
import { FaBriefcase } from "react-icons/fa";

const ExperienceItem = ({ data }: { data: IExperienceItem }) => {
  return (
    <div className="w-full h-full p-8 bg-gradient-to-r from-[var(--bgColor)] to-[var(--primaryColor10)] shadow-2xl rounded-2xl hover:scale-105 transform transition-transform duration-300">
      <div className="flex items-center gap-6 mb-6">
        <div className="p-4 bg-gradient-to-r from-[var(--primaryColor)] to-blue-500 text-white rounded-full shadow-lg">
          <FaBriefcase size={28} />
        </div>
        <div>
          <p className="text-2xl font-extrabold text-white tracking-wide">
            {data.designation}
          </p>
          <p className=" font-extrabold text-white text-sm font-medium">
            @ {data.company}
          </p>
          <p className="text-white text-sm font-medium italic">
            {data.location} | {data.startDate} - {data.isCurrentJob== true && "Present"}
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 mt-6">
        {data.description.map((desc: string, i: number) => (
          <div
            key={i}
            className="flex items-start"
          >
            <p className="text-white font-light leading-relaxed">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
