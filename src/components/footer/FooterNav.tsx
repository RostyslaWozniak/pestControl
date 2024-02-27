import { NavLink } from "react-router-dom";
import { navData } from "../../data/navData";

const FooterNav = () => {
  return (
    <ul className="space-y-2">
      {navData.map(({ id, name, path }) => (
        <li key={id}>
          <NavLink
            key={id}
            onClick={() => scrollTo({ top: 0 })}
            className="cursor-pointer capitalize"
            to={path}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default FooterNav;
