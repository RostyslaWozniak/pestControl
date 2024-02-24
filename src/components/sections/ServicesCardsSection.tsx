import rodentImg from "../../assets/images/photos/services-rodent.jpg";
import insectImg from "../../assets/images/photos/services-insects.jpg";
import desinfectionImg from "../../assets/images/photos/services-desinfection.jpg";
import { Card, CardTitle, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { CgArrowLongRight } from "react-icons/cg";
import { cn } from "../../lib/cn";
import MaxWidthWraper from "../MaxWidthWraper";
const servicesCardData = [
  {
    id: 1,
    img: rodentImg,
    title: "Rodent Pest Control",
    content:
      "Rodents can cause significant damage to property, contaminate food supplies, and transmit diseases. Our rodent pest control service is designed to effectively eliminate rodent infestations and prevent their return.",
    path: "#",
  },
  {
    id: 2,
    img: insectImg,
    title: "Insect Disinfestation",
    content:
      "Insects can be a nuisance and a health hazard, invading homes and businesses. Our insect disinfestation service targets various types of insects to restore a pest-free environment.",
    path: "#",
  },
  {
    id: 3,
    img: desinfectionImg,
    title: "Disinfection",
    content:
      "Disinfection is a crucial step in maintaining a clean and healthy environment, especially in spaces where hygiene is paramount. Our disinfection services go beyond mere cleaning to ensure thorough elimination of harmful pathogens, including bacteria, viruses, and fungi.",
    path: "#",
  },
];

const ServicesCardsSection = () => {
  return (
    <section className="bg-services-cards space-y-20 bg-cover pb-80 pt-28">
      <h2 className="text-black-75 text-center text-4xl font-bold">
        Our Services
      </h2>
      <MaxWidthWraper className="flex">
        {servicesCardData.map(({ id, img, title, content, path }) => (
          <Card
            key={id}
            className={cn(
              "grid w-[400px] min-w-[400px] space-y-6 overflow-hidden rounded-[50px] border-2 border-background bg-primary shadow-xl duration-300 hover:z-10 hover:scale-[102%] hover:shadow-2xl",

              id === 1 && "translate-x-20",
              id === 2 && " translate-y-20",
              id === 3 && "-translate-x-20 translate-y-40",
            )}
          >
            <img src={img} alt={title} className="h-[350px] object-cover" />
            <CardTitle className="px-10 text-3xl text-background">
              {title}
            </CardTitle>
            <CardContent
              className={cn("grid grow text-background", id !== 3 && "pr-20")}
            >
              <p>{content}</p>
            </CardContent>
            <CardFooter>
              <Button variant={"outline"} className="group space-x-3">
                <a href={path}>Learn more</a>
                <CgArrowLongRight
                  className="mt-1 transition-transform duration-200 group-hover:translate-x-4"
                  size={30}
                />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </MaxWidthWraper>
    </section>
  );
};

export default ServicesCardsSection;
