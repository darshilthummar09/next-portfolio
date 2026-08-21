import ResponsiveBox from "../core/ResponsiveBox";
import ConstrainedBox from "../core/constrained-box";
import ContactButton from "../UI/ContactButton";
import socialLinks from "../../data/importantLinks";

const HomeSection6 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="flex flex-col items-center justify-center section-padding relative bg-[var(--background)] overflow-hidden"
      id={id}
    >
      {/* Ambient background video — cinematic closer, heavily muted behind the CTA copy */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-[0.55] saturate-[0.85]"
        >
          <source src="/contact-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/45 to-[var(--background)]/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.1),transparent_65%)]" />
      </div>

      <ConstrainedBox classNames="px-4 w-full relative z-10 flex flex-col items-center">
        
        <p className="font-mono text-sm text-[var(--primaryColor)] uppercase tracking-[0.3em] mb-6">
          Next Steps
        </p>

        <h2 className="font-display text-5xl md:text-7xl lg:text-9xl font-black text-white text-center leading-[0.9] tracking-tighter uppercase mb-8">
          Let's Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primaryColor)] to-[#FFF1C5]">Together</span>
        </h2>

        <p className="text-center text-lg md:text-xl text-[var(--textColorLight)] max-w-2xl mx-auto font-light leading-relaxed mb-10">
          I am open to freelance projects, full-time opportunities, and collaborations. 
          Let's talk about your product goals and bring them to life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-3.5 lg:gap-4 w-full max-w-3xl">
          {socialLinks.map((link, index) => {
            return (
              <ContactButton
                key={`social-link-${index}`}
                name={link.name}
                text={link.text}
                icon={link.icon}
                iconImage={link.iconImage}
                url={link.url}
                className="group relative flex items-center gap-3 px-4 py-3.5 rounded-2xl border border-white/10 bg-[rgba(12,16,26,0.65)] shadow-[0_10px_30px_rgba(4,8,16,0.35)] hover:border-[var(--primaryColor)]/50 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(212,175,55,0.15)] transition-all duration-300 w-full"
              />
            );
          })}
        </div>

      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection6;
