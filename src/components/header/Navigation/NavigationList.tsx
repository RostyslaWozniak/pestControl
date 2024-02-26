import { cn } from "../../../lib/cn";
import { motion } from "framer-motion";
import NavItem from "./NavItem";

type NavigationListProps = {
  className?: string;
  navData: {
    id: number;
    path: string;
    name: string;
  }[];
};
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const NavigationList = ({ className, navData }: NavigationListProps) => {
  return (
    <motion.ul
      variants={variants}
      className={cn("flex items-center gap-5", className)}
    >
      {navData.map((props) => (
        <NavItem key={props.id} {...props} />
      ))}
    </motion.ul>
  );
};

export default NavigationList;
