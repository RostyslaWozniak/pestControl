/** @format */

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ContactSection from "./components/sections/ContactSection";
import FAQSection from "./components/sections/FAQSection";
import HeroSection from "./components/sections/Hero";
import OrderStepsSection from "./components/sections/OrderStepsSection";
import ServicesCardsSection from "./components/sections/ServicesCardsSection";
import WhyUsSection from "./components/sections/WhyUsSection";

function App() {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <Header />
      <main className="grid grow">
        <HeroSection />
        <ServicesCardsSection />
        <OrderStepsSection />
        <WhyUsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
