import Animate from "../Animation/Animate";
import { cn } from "../../lib/cn";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

type SocialMediaIconsProps = {
  className?: string;
  iconsColor?: string;
  iconSize?: number;
  isDevided?: boolean;
};

const SocialMediaIcons = ({
  className,
  iconsColor,
  iconSize,
  isDevided = false,
}: SocialMediaIconsProps) => {
  const socialMediaData = [
    {
      id: 1,
      name: "twiter",
      icon: <FaTwitter color={iconsColor || undefined} size={iconSize} />,
      path: "https://twitter.com",
    },
    {
      id: 2,
      name: "instagram",
      icon: <AiFillInstagram color={iconsColor || undefined} size={iconSize} />,
      path: "https://instagram.com",
    },
    {
      id: 3,
      name: "facebook",
      icon: <FaFacebook color={iconsColor || undefined} size={iconSize} />,
      path: "https://www.facebook.com",
    },
  ];
  return (
    <>
      <ul className={cn("flex items-center gap-10", className)}>
        {isDevided && (
          <span className="block h-7 w-[3px] rounded-full bg-black-50" />
        )}
        {socialMediaData.map(({ id, icon, path }) => (
          <li key={id}>
            <Animate direction="y" delay={id * 0.1}>
              <a href={path} target="_blank">
                {icon}
              </a>
            </Animate>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SocialMediaIcons;
