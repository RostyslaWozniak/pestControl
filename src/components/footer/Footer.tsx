import Navigation from "../header/Navigation";
import Logo from "../header/logo/Logo";
import SocialMediaIcons from "../header/SocialMediaIcons";
import MaxWidthWraper from "../MaxWidthWraper";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white">
      <MaxWidthWraper className="flex items-center justify-between">
        <Logo />
        <Navigation className="flex-col items-start gap-2" />
        <SocialMediaIcons className="flex-col items-start gap-2" />
      </MaxWidthWraper>
    </footer>
  );
};

export default Footer;
