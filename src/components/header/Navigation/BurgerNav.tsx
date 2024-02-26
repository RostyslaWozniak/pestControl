import { motion } from "framer-motion";
import NavigationList from "./NavigationList";
import { navData } from "../../../data/navData";
import { useNavContext } from "../../../context/NavContext";
import SocialMediaIcons from "../SocialMediaIcons";
import { backgroundColor } from "../../../helpers/globalVariabels";

const navSidebar = {
  open: (windowHeight = 1000) => ({
    clipPath: `circle(${windowHeight * 2 + 200}px at 100% 0px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const BurgerNav = () => {
  const { isBurgerNavActive } = useNavContext();
  return (
    <motion.div
      className="fixed bottom-0 right-0 top-0 w-[min(450px,100%)] bg-secondary"
      variants={navSidebar}
    >
      {isBurgerNavActive && (
        <>
          <NavigationList
            navData={navData}
            className="absolute left-1/2 top-[100px] -translate-x-1/2 flex-col text-2xl text-background aria-[current=page]:border-background lg:static"
          />
          <SocialMediaIcons
            iconSize={40}
            iconsColor={backgroundColor}
            className="absolute bottom-5 left-1/2 -translate-x-1/2"
          />
        </>
      )}
    </motion.div>
  );
};

export default BurgerNav;
