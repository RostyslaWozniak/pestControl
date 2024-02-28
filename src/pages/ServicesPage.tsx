import ContactSection from "../components/sections/Contact/ContactSection";
import FAQSection from "../components/sections/FAQSection/FAQSection";
import OrderStepsSection from "../components/sections/OrderStepsSection";

const ServicesPage = () => {
  return (
    <div className="mt-16">
      <OrderStepsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default ServicesPage;
