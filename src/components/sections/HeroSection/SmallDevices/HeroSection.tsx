import HeroContent from "../HeroContent";
import CardsSection from "./CardsSection";

const HeroSection = () => {
  return (
    <section className="grid place-items-center bg-gradient-to-l from-cyan-100 to-blue-100">
      <HeroContent className="min-h-screen items-start justify-center " />
      <CardsSection />
    </section>
  );
};

export default HeroSection;
