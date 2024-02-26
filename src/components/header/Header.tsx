import MaxWidthWraper from "../MaxWidthWraper";
import Logo from "./logo/Logo";
import SocialMediaIcons from "./SocialMediaIcons";
import { secondaryColor } from "../../helpers/globalVariabels";
import BurgerBtn from "../ui/BurgerBtn";

import HeaderNav from "./Navigation/HeaderNav";
import { NavContextProvider } from "../../context/NavContext";

const Header = () => {
  return (
    <NavContextProvider>
      <header className="fixed z-30 w-full  bg-gray-200/80">
        <MaxWidthWraper className="flex h-16 items-center justify-between">
          <Logo className="text-secondary" />
          <HeaderNav />
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
