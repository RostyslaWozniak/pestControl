import ContactSection from "../components/sections/ContactSection";
import FAQSection from "../components/sections/FAQSection/FAQSection";
import HeroSection from "../components/sections/HeroSection/SmallDevices/HeroSection";
import { HeroParallax } from "../components/sections/HeroSection/Parallax/ParalaxHero";
import OrderStepsSection from "../components/sections/OrderStepsSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import { lgWidth } from "../helpers/globalVariabels";
import useWindowDimensions from "../hooks/useWindowDimensions";

const HomePage = () => {
  const { windowWidth } = useWindowDimensions();
  return (
    <>
      {windowWidth < lgWidth ? <HeroSection /> : <HeroParallax />}
      <OrderStepsSection />
      <WhyUsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
