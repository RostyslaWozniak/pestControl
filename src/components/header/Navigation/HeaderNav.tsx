import { useNavContext } from "../../../context/NavContext";
import { motion } from "framer-motion";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import BurgerNav from "./BurgerNav";
import NavigationList from "./NavigationList";
import { navData } from "../../../data/navData";
import { lgWidth } from "../../../helpers/globalVariabels";

const HeaderNav = () => {
  const { isBurgerNavActive } = useNavContext();

  const { windowHeight, windowWidth } = useWindowDimensions();
  return (
    <motion.nav
      initial={false}
      animate={isBurgerNavActive ? "open" : "closed"}
      custom={windowHeight}
      className=" font-medium"
    >
      {windowWidth > lgWidth ? (
        <NavigationList navData={navData} />
      ) : (
        <BurgerNav />
      )}
    </motion.nav>
  );
};

export default HeaderNav;
