import { navData } from "../../../data/navData";
import { lgWidth } from "../../../helpers/globalVariabels";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import BurgerNav from "./BurgerNav";
import NavigationList from "./NavigationList";

const Navigation = () => {
  const { windowWidth } = useWindowDimensions();
  return (
    <>
      {windowWidth > lgWidth ? (
        <NavigationList navData={navData} />
      ) : (
        <BurgerNav />
      )}
    </>
  );
};

export default Navigation;
