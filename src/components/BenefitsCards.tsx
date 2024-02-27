import { cn } from "../lib/cn";
import MaxWidthWraper from "./MaxWidthWraper";
import Animate from "./Animation/Animate";
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

const BenefitsCards = ({ className }: { className?: string }) => {
  return (
    <MaxWidthWraper className={cn("relative space-y-16", className)}>
      <h2 className="text-center text-3xl font-bold text-black-75 sm:text-4xl">
        Benefits
      </h2>
      <div className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
        {benefitData.map(({ id, title, content }) => (
          <Animate
            direction="y"
            delay={id * 0.1}
            translate={100}
            key={id}
            className={cn(
              "h-full w-[min(350px,100%)] space-y-4 rounded-[50px] border border-black-10 bg-gradient-to-b from-white to-blue-50 px-5 py-6 text-center shadow-xl md:space-y-8",
            )}
          >
            <h3 className="text-medium text-xl text-black md:text-2xl">
              {title}
            </h3>

            <p className="text-sm text-black-75 md:text-base">{content}</p>
          </Animate>
        ))}
      </div>
    </MaxWidthWraper>
  );
};

export default BenefitsCards;
