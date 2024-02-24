import { Card, CardTitle, CardContent } from "./ui/card";
import { cn } from "../lib/cn";
const benefitData = [
  {
    id: 1,
    title: "Effective Solutions",
    content:
      "Our team of skilled professionals utilizes advanced techniques and eco-friendly products to eliminate pests effectively and efficiently.",
  },
  {
    id: 2,
    title: "Personalized Approach",
    content:
      "We recognize that every pest problem is different. That's why we take a personalized approach, crafting solutions specifically designed to address your concerns and provide lasting relief.",
  },
  {
    id: 3,
    title: "Certified Experts",
    content:
      "With our licensed and experienced technicians at the helm, you can trust that your pest control needs are in capable hands. Our team stays abreast of the latest industry advancements to deliver unparalleled service.",
  },
];

const BenefitsCards = () => {
  return (
    <div className="flex justify-center gap-16">
      {benefitData.map(({ id, title, content }) => (
        <Card
          key={id}
          className={cn(
            "w-[350px] space-y-8 rounded-[50px] bg-gradient-to-b from-white to-blue-50 py-6 text-center shadow-xl",
          )}
        >
          <CardTitle className="text-medium text-2xl text-black">
            {title}
          </CardTitle>
          <CardContent>
            <p className="text-black-75">{content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BenefitsCards;
