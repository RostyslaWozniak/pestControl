import Animate from "../Animation/Animate";
import { contactElements } from "../sections/ContactSection";

const FooterContact = () => {
  return (
    <ul className="space-y-2">
      {contactElements.map(({ id, name, value, action }) => (
        <li key={id}>
          <Animate direction="y" delay={id * 0.1}>
            <a href={action} className="flex items-center gap-5">
              <span className="font-bold capitalize">{name}: </span>
              <p>{value}</p>
            </a>
          </Animate>
        </li>
      ))}
    </ul>
  );
};

export default FooterContact;
