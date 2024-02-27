import BeforeAfterSection from "../components/sections/BeforAndAfter/BeforeAfterSection";
import ContactSection from "../components/sections/ContactSection";
import WhyUsSection from "../components/sections/WhyUsSection";

const AboutPage = () => {
  return (
    <div className="mt-16">
      <WhyUsSection />
      <BeforeAfterSection />
      <ContactSection />
    </div>
  );
};

export default AboutPage;
