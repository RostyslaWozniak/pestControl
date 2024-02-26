import { NavLink } from "react-router-dom";
import Animate from "../../Animation/Animate";
import { cn } from "../../../lib/cn";

type NavItemProps = {
  id: number;
  path: string;
  name: string;
  dark?: boolean;
};

const NavItem = ({ id, path, name, dark = false }: NavItemProps) => {
  return (
    <li>
      <Animate direction="x" delay={id * 0.1} translate={200}>
        <NavLink
          onClick={() => scrollTo({ top: 0 })}
          className={cn(
            " cursor-pointer rounded-[20px] px-5 py-1 capitalize aria-[current=page]:bg-secondary aria-[current=page]:text-background",
            dark && "aria-[current=page]:bg-background",
          )}
          to={path}
        >
          {name}
        </NavLink>
      </Animate>
    </li>
  );
};

export default NavItem;
