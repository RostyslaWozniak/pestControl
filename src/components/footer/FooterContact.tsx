import { contactElements } from "../sections/Contact/ContactSection";

const FooterContact = () => {
  return (
    <ul className="space-y-2">
      {contactElements.map(({ id, name, value, action }) => (
        <li key={id}>
          <a href={action} className="flex items-center gap-5">
            <span className="font-bold capitalize">{name}: </span>
            <p>{value}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterContact;
