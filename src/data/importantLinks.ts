  import Strings from "@/constants/strings";
  import type { ISocialLinkItem } from "@/interfaces";
  
  const socialLinks: ISocialLinkItem[] = [
    {
      name: Strings.github,
      url: Strings.githubLink,
      icon: Strings.githubIcon,
      text: Strings.githubUsername,
    },
    {
      name: Strings.linkedIn,
      url: Strings.linkedInLink,
      icon: Strings.linkedInIcon,
      text: Strings.linkedInUsername,
    },
    {
      name: Strings.twitter,
      url: Strings.twitterLink,
      icon: Strings.twitterIcon,
      text: Strings.twitterUsername,
    },
    {
      name: Strings.upwork,
      url: Strings.upworkLink,
      icon: Strings.upworkIcon,
      iconImage: Strings.upworkIconImage,
      text: Strings.upworkUsername,
    }
  ];
  
  export default socialLinks;
  
