import { NavLink } from "react-router-dom";
import { navData } from "../../data/navData";
import Animate from "../Animation/Animate";

const FooterNav = () => {
  return (
    <ul className="space-y-2">
      {navData.map(({ id, name, path }) => (
        <li key={id}>
          <Animate direction="y" delay={id * 0.1}>
            <NavLink
              key={id}
              onClick={() => scrollTo({ top: 0 })}
              className="cursor-pointer capitalize"
              to={path}
            >
              {name}
            </NavLink>
          </Animate>
        </li>
      ))}
    </ul>
  );
};

export default FooterNav;
