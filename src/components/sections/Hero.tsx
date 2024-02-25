import BenefitsCards from "../BebefitsCards";
import MaxWidthWraper from "../MaxWidthWraper";
import { Button } from "../ui/button";
import { FaPhoneAlt } from "react-icons/fa";
import Animate from "../Animation/Animate";

const HeroSection = () => {
  return (
    <section className="bg-hero bg-no-repeat py-20">
      <MaxWidthWraper className="relative flex justify-end py-28">
        <div className=" w-[50%] space-y-8">
          <Animate direction="x" translate={200} delay={0.5}>
            <h1 className="text-[31px] font-medium text-black-75">
              Say Goodbye to Pests with Our Expert Solutions
            </h1>
          </Animate>
          <Animate direction="x" translate={200} delay={0.7}>
            <h2 className="text-[61px] font-bold leading-[73px] text-primary">
              Pest Control Services
            </h2>
          </Animate>
          <Animate direction="x" translate={200} delay={0.9}>
            <p className=" text-black-75">
              Welcome to PestControl, where we specialize in providing top pest
              control solutions to ensure your peace of mind. Say goodbye to
              unwanted intruders invading your space with our expert services
              tailored to your needs.
            </p>
          </Animate>
          <Animate direction="y" translate={50} delay={1.1} duration={0.5}>
            <Button className="gap-5 ">
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
