import { cn } from "../../lib/cn";
import { motion } from "framer-motion";

const Navigation = ({ className }: { className?: string }) => {
  const navData = [
    { id: 1, path: "#", name: "services" },
    { id: 2, path: "#", name: "about us" },
    { id: 3, path: "#", name: "contact us" },
  ];
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
            <a className="cursor-pointer capitalize" href={path}>
              {name}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
