import BenefitsCards from "../BebefitsCards";
import MaxWidthWraper from "../MaxWidthWraper";
import { Button } from "../ui/button";
import { FaPhoneAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="bg-hero bg-no-repeat py-20">
      <MaxWidthWraper className="flex justify-end py-28">
        <div className="w-[50%] space-y-8">
          <h1 className="text-black-75 text-[31px] font-medium">
            Say Goodbye to Pests with Our Expert Solutions
          </h1>
          <h2 className="text-[61px] font-bold leading-[73px] text-primary">
            Pest Control Services
          </h2>
          <p className="text-black-75">
            Welcome to PestControl, where we specialize in providing top pest
            control solutions to ensure your peace of mind. Say goodbye to
            unwanted intruders invading your space with our expert services
            tailored to your needs.
          </p>
          <Button className="gap-5 ">
            Contact <FaPhoneAlt size={20} />
          </Button>
        </div>
      </MaxWidthWraper>
      <BenefitsCards />
    </section>
  );
};

export default HeroSection;
