import type { ISkillListItem } from "@/interfaces";
import Image from "next/image";
import CardBox from "../core/CardBox";
import Row from "../core/Row";
import Column from "../core/Column";

const SkillCard = ({ data }: { data: ISkillListItem }) => {
  // console.log(data)
  return (
    <CardBox classNames="w-full h-full p-7 section-surface hover:translate-y-[-4px] transform transition-transform duration-300">
      <p className="text-lg font-semibold text-center text-[var(--primaryColor)]">
        {data.title}
      </p>

      {data.items.length > 0 ? (
        <Row classNames="gap-4 mt-8 flex-wrap justify-center items-center">
          {data.items.map((skill, index) => {
            return (
              <Column
                key={`skill-item-${index}`}
                classNames="items-center gap-1 text-[var(--textColorLight)]"
              >
                {skill.icon ? (
                  <Image
                    src={skill.icon}
                    alt={`logo-${skill.title}`}
                    width={144}
                    height={144}
                    sizes="100%"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/images/logical-thinking.png"
                    className="w-12 lg:w-14 h-auto aspect-square object-cover"
                  />
                ) : null}

                <p className="text-xs/6 font-normal">{skill.title}</p>
              </Column>
            );
          })}
        </Row>
      ) : null}
    </CardBox>
  );
};

export default SkillCard;
