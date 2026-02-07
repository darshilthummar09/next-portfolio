import Link from "next/link";
import Image from "next/image";

const ContactButton = ({ text, icon, iconImage, url, className }: any) => {
  return (
    <Link
      className={className}
      href={url}
      target="_blank"
    >
      {/* <span className="text-xl/6 text-[var(--textColor)]">
        {typeof icon === "string" ? (
          <Image
            src={icon}
            alt={`social-${text}`}
            width={100}
            height={100}
            className="w-[1.5rem] h-auto aspect-square"
          />
        ) : (
          <FontAwesomeIcon icon={icon} />
        )}
      </span> */}
      {iconImage ? (
        <Image
          src={iconImage}
          alt={`${text} logo`}
          width={24}
          height={24}
          className="w-6 h-6 object-contain"
        />
      ) : icon ? (
        <i className={icon} />
      ) : null}
      <p className="text-base font-semibold text-[var(--textColor)]">{text}</p>
    </Link>
  );
};

export default ContactButton;
