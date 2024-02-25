import ContactSection from "../components/sections/ContactSection";
import FAQSection from "../components/sections/FAQSection";
import HeroSection from "../components/sections/HeroSection";
import OrderStepsSection from "../components/sections/OrderStepsSection";
import ServicesCardsSection from "../components/sections/ServicesCardsSection";
import WhyUsSection from "../components/sections/WhyUsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesCardsSection />
      <OrderStepsSection />
      <WhyUsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
