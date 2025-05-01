        import React from "react";
        import ResponsiveBox from "../core/ResponsiveBox";
        import ConstrainedBox from "../core/constrained-box";
        import SectionTitle from "../common/SectionTitle";
        import expirence from "../../data/expirence";
import ExperienceItem from "../UI/ExperienceItem";
        
        const ExperienceSection = ({ id }: { id: string }) => {
          return (
            <ResponsiveBox
              classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center lg:px-40"
              id={id}
            >
              <ConstrainedBox classNames="py-12">
                <SectionTitle>Expirence</SectionTitle>
        
                <div className="w-full flex flex-col md:flex-row justify-between space-x-4">
                  <div className="flex-1 p-6">
                    {expirence.map((edu, i) => (
                      <ExperienceItem
                        key={`education-${i}`}
                        data={edu}
                      />
                    ))}
                  </div>
                </div>
              </ConstrainedBox>
            </ResponsiveBox>
          );
        };
        
        export default ExperienceSection;
        