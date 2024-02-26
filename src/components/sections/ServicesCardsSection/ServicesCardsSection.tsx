import MaxWidthWraper from "../../MaxWidthWraper";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { servicesCardData } from "../../../data/servicesCardData";
import LgCardItem from "./LgCardItem";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import SmCardItem from "./SmCardItem";
import { xlWith } from "../../../helpers/globalVariabels";

const ServicesCardsSection = () => {
  const { windowWidth } = useWindowDimensions();

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={ref}
      className="space-y-20 bg-services-cards bg-cover pt-28 xl:pb-80"
    >
      <h2 className="text-center text-3xl font-bold text-black-75 sm:text-4xl">
        Our Services
      </h2>
      <MaxWidthWraper className="flex flex-col  px-0 sm:gap-10 sm:px-2.5 xl:flex-row xl:gap-0">
        {servicesCardData.map((props) =>
          windowWidth > xlWith ? (
            <LgCardItem
              key={props.id}
              scrollYProgress={scrollYProgress}
              {...props}
            />
          ) : (
            <SmCardItem key={props.id} {...props} />
          ),
        )}
      </MaxWidthWraper>
    </section>
  );
};

export default ServicesCardsSection;
