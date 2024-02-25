import { NavLink } from "react-router-dom";
import { cn } from "../../lib/cn";
import { motion } from "framer-motion";

const navData = [
  { id: 1, path: "/", name: "home" },
  { id: 2, path: "/services", name: "services" },
  { id: 3, path: "/about", name: "about us" },
  { id: 4, path: "/contact", name: "contact us" },
];
const Navigation = ({ className }: { className?: string }) => {
  const handleNavClick = () => {
    scrollTo({
      top: 0,
    });
  };
  return (
    <nav>
      <ul className={cn("flex items-center gap-10", className)}>
        {navData.map(({ id, path, name }) => (
          <motion.li
            initial={{
              translateY: 30,
              opacity: 0,
            }}
            whileInView={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{ delay: id * 0.09 }}
            viewport={{ once: true }}
            key={id}
          >
            <NavLink
              onClick={handleNavClick}
              className="cursor-pointer capitalize"
              to={path}
            >
              {name}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
