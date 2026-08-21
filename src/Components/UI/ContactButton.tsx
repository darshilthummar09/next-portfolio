import Link from "next/link";
import Image from "next/image";

const ContactButton = ({ name, text, icon, iconImage, url, className }: any) => {
  return (
    <Link href={url} target="_blank" className={className}>
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 shrink-0 text-base leading-none transition-all duration-300 group-hover:bg-[var(--primaryColor)] group-hover:border-[var(--primaryColor)]">
        {iconImage ? (
          <Image
            src={iconImage}
            alt={`${text} logo`}
            width={18}
            height={18}
            className="w-[18px] h-[18px] object-contain"
          />
        ) : icon ? (
          <i className={icon} />
        ) : null}
      </span>
      <span className="flex flex-col items-start min-w-0 text-left">
        <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/35">
          {name}
        </span>
        <span className="text-sm font-medium text-white/90 truncate max-w-[9rem]">
          {text}
        </span>
      </span>
    </Link>
  );
};

export default ContactButton;
