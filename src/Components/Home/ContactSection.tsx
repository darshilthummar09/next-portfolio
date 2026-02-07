import ResponsiveBox from "../core/ResponsiveBox";
import ConstrainedBox from "../core/constrained-box";
import GridBox from "../core/GridBox";
import Column from "../core/Column";
import SectionTitle from "../common/SectionTitle";
import ContactButton from "../UI/ContactButton";
import socialLinks from "../../data/importantLinks";

const HomeSection6 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="section-shell min-h-screen items-center justify-center lg:px-32"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-20 relative z-10">
        <SectionTitle>Get in touch</SectionTitle>

        <Column classNames="mt-10 w-full section-surface p-8">
          <p className="text-center text-lg text-[var(--textColorLight)] max-w-2xl mx-auto">
            I am open to freelance projects, full-time opportunities, and
            collaborations. Let's talk about your product goals and bring them
            to life.
          </p>

          <GridBox classNames="sm:grid-cols-2 w-full mx-auto gap-4 mt-8">
            {socialLinks.map((link, index) => {
              return (
                <ContactButton
                  key={`social-link-${index}`}
                  text={link.text}
                  icon={link.icon}
                  url={link.url}
                  className="flex items-center gap-x-3 p-4 border border-white/10 rounded-xl text-lg hover:border-[var(--primaryColor)] hover:text-[var(--primaryColor)] transition duration-300"
                />
              );
            })}
          </GridBox>

          <p className="text-center mx-auto mt-10 text-xl font-semibold mb-0">
            Currently available for freelance work.
          </p>
        </Column>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection6;
