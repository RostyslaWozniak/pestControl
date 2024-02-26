import BenefitsCards from "../BebefitsCards";
import MaxWidthWraper from "../MaxWidthWraper";
import { Button } from "../ui/button";
import { FaPhoneAlt } from "react-icons/fa";
import Animate from "../Animation/Animate";

const HeroSection = () => {
  return (
    <section className=" bg-left-top bg-no-repeat md:bg-hero">
      <div className="absolute inset-0 bg-gradient-to-l from-white from-[40%] to-white/20 "></div>
      <MaxWidthWraper className="relative flex justify-end pb-20 pt-28 sm:pb-28 sm:pt-56">
        <div className="space-y-4 md:space-y-8 lg:w-[50%]">
          <Animate direction="x" translate={200}>
            <h1 className="text-2xl font-medium text-black-75 sm:text-3xl">
              Say Goodbye to Pests with Our Expert Solutions
            </h1>
          </Animate>
          <Animate direction="x" translate={200} delay={0.2}>
            <h2 className="text-5xl font-bold leading-[73px] text-primary sm:text-6xl ">
              Pest Control Services
            </h2>
          </Animate>
          <Animate direction="x" translate={200} delay={0.4}>
            <p className="text-sm text-black-75 sm:text-base">
              Welcome to PestControl, where we specialize in providing top pest
              control solutions to ensure your peace of mind. Say goodbye to
              unwanted intruders invading your space with our expert services
              tailored to your needs.
            </p>
          </Animate>
          <Animate direction="y" translate={50} delay={0.6} duration={0.5}>
            <Button className="mt-2 gap-5">
              Contact <FaPhoneAlt size={20} />
            </Button>
          </Animate>
        </div>
      </MaxWidthWraper>
      <BenefitsCards />
    </section>
  );
};

export default HeroSection;
