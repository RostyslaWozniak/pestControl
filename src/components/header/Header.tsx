import Navigation from "./Navigation";
import MaxWidthWraper from "../MaxWidthWraper";
import Logo from "./logo/Logo";
import SocialMediaIcons from "./SocialMediaIcons";
import { secondary } from "../../helpers/globalVariabels";

const Header = () => {
  return (
    <header className=" absolute w-full bg-gray-200/80">
      <MaxWidthWraper className="flex h-16 items-center justify-between">
        <Logo className="text-secondary" />
        <Navigation className="font-medium" />
        <SocialMediaIcons iconsColor={secondary} iconSize={20} isDevided />
      </MaxWidthWraper>
    </header>
  );
};

export default Header;
