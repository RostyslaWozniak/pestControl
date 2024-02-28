import MaxWidthWraper from "../MaxWidthWraper";
import Logo from "./logo/Logo";
import SocialMediaIcons from "./SocialMediaIcons";
import { secondaryColor } from "../../helpers/globalVariabels";
import BurgerBtn from "../ui/BurgerBtn";

import { NavContextProvider } from "../../context/NavContext";

import Navigation from "./Navigation/Navigation";

const Header = () => {
  return (
    <NavContextProvider>
      <header className="fixed z-30 w-full bg-gradient">
        <MaxWidthWraper className="flex h-16 items-center justify-between  text-secondary">
          <Logo className="text-secondary" />
          <Navigation />
          <div className="flex gap-5">
            <SocialMediaIcons
              iconsColor={secondaryColor}
              iconSize={20}
              isDevided
              className="hidden sm:flex"
            />
            <BurgerBtn />
          </div>
        </MaxWidthWraper>
      </header>
    </NavContextProvider>
  );
};

export default Header;
