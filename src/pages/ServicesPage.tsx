import ContactSection from "../components/sections/ContactSection";
import OrderStepsSection from "../components/sections/OrderStepsSection";
import ServicesCardsSection from "../components/sections/HeroSection/SmallDevices/CardsSection";

const ServicesPage = () => {
  return (
    <div className="mt-16">
      <OrderStepsSection />
      <ServicesCardsSection />
      <ContactSection />
    </div>
  );
};

export default ServicesPage;
