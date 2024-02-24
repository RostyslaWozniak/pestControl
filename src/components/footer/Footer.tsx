import Navigation from "../header/Navigation";
import SocialMediaIcons from "../header/SocialMediaIcons";
import MaxWidthWraper from "../MaxWidthWraper";
import { contactElements } from "../sections/ContactSection";
import Map from "../Map";

const Footer = () => {
  return (
    <footer className="bg-secondary p-5 text-white">
      <MaxWidthWraper className="flex items-center justify-between">
        <div className="space-y-2 text-xl ">
          <a href="#">Home</a>
          <Navigation className="flex-col items-start gap-2" />
        </div>
        <ul className="space-y-2">
          {contactElements.map(({ id, name, value, action }) => (
            <li key={id}>
              <a href={action} className="flex gap-5">
                <span className="font-bold capitalize">{name}: </span>
                <p>{value}</p>
              </a>
            </li>
          ))}
        </ul>
        <Map />
        <SocialMediaIcons
          iconSize={30}
          className="flex-col items-start gap-5"
        />
      </MaxWidthWraper>
    </footer>
  );
};

export default Footer;
