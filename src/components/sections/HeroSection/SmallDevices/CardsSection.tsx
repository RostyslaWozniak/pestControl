import MaxWidthWraper from "../../../MaxWidthWraper";
import { servicesCardData } from "../../../../data/servicesCardData";

import CardItem from "./CardItem";

const CardsSection = () => {
  return (
    <section className="space-y-20 bg-services-cards bg-cover pt-28 xl:pb-80">
      <h2 className="text-center text-3xl font-bold text-black-75 sm:text-4xl">
        Our Services
      </h2>
      <MaxWidthWraper className="flex flex-col  px-0 sm:gap-10 sm:px-2.5 xl:flex-row xl:gap-0">
        {servicesCardData.map((props) => (
          <CardItem key={props.id} {...props} />
        ))}
      </MaxWidthWraper>
    </section>
  );
};

export default CardsSection;
