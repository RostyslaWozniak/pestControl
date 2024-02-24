import Navigation from "./Navigation";
import MaxWidthWraper from "../MaxWidthWraper";
import Logo from "./logo/Logo";
import SocialMediaIcons from "./SocialMediaIcons";

const Header = () => {
  return (
    <header className=" bg-gray-400">
      <MaxWidthWraper className="flex h-16 items-center justify-between">
        <Logo />
        <Navigation />
        <SocialMediaIcons />
      </MaxWidthWraper>
    </header>
  );
};

export default Header;
