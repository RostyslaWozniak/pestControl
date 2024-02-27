import BenefitsCards from "../components/BenefitsCards";
import ContactSection from "../components/sections/ContactSection";
import OrderStepsSection from "../components/sections/OrderStepsSection";

const ServicesPage = () => {
  return (
    <div className="mt-16">
      <OrderStepsSection />
      <BenefitsCards className="pb-32" />
      <ContactSection />
    </div>
  );
};

export default ServicesPage;
