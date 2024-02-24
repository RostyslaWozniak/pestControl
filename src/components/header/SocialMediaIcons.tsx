import { socialMediaData } from "../../data/socialMedia";
import { cn } from "../../lib/cn";

const SocialMediaIcons = ({ className }: { className?: string }) => {
  return (
    <ul className={cn("flex items-center gap-10", className)}>
      {socialMediaData.map(({ id, name, icon }) => (
        <li key={id}>
          <img src={icon} alt={`${name} icon`} />
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaIcons;
