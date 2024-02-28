import { NavLink } from "react-router-dom";
import Animate from "../../Animation/Animate";
import { cn } from "../../../lib/cn";

type NavItemProps = {
  id: number;
  path: string;
  name: string;
  dark?: boolean;
};

const NavItem = ({ id, path, name }: NavItemProps) => {
  return (
    <li>
      <Animate direction="x" delay={id * 0.1} translate={200}>
        <NavLink
          onClick={() => scrollTo({ top: 0 })}
          className={cn(
            "cursor-pointer rounded-[20px] px-5 pb-[5px] pt-1 capitalize aria-[current=page]:bg-background aria-[current=page]:text-secondary",
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
