import SocialMediaIcons from "../header/SocialMediaIcons";
import MaxWidthWraper from "../MaxWidthWraper";
import Map from "../Map";
import FooterContact from "./FooterContact";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer className="bg-secondary py-5 text-white">
      <MaxWidthWraper className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <FooterNav />
        <FooterContact />
        <Map />
        <SocialMediaIcons
          iconSize={30}
          className="items-start gap-5 self-center lg:flex-col"
        />
      </MaxWidthWraper>
    </footer>
  );
};

export default Footer;
