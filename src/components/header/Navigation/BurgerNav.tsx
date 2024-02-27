import { motion } from "framer-motion";
import NavigationList from "./NavigationList";
import { navData } from "../../../data/navData";
import { useNavContext } from "../../../context/NavContext";
import SocialMediaIcons from "../SocialMediaIcons";
import { backgroundColor } from "../../../helpers/globalVariabels";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

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
  const { windowHeight } = useWindowDimensions();
  return (
    <motion.nav
      initial={false}
      animate={isBurgerNavActive ? "open" : "closed"}
      custom={windowHeight}
      className=" font-medium"
    >
      <motion.div
        className="fixed bottom-0 right-0 top-0 w-[min(450px,100%)] bg-secondary"
        variants={navSidebar}
      >
        {isBurgerNavActive && (
          <>
            <NavigationList
              navData={navData}
              className=" absolute left-1/2 top-[100px] -translate-x-1/2 flex-col text-2xl text-background"
            />
            <SocialMediaIcons
              iconSize={40}
              iconsColor={backgroundColor}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            />
          </>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default BurgerNav;
