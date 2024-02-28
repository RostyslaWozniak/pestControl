import { cn } from "../lib/cn";
import MaxWidthWraper from "./MaxWidthWraper";
import Animate from "./Animation/Animate";
import Heading from "./ui/heading";
import { benefitData } from "../data/benefitCardsData";

const BenefitsCards = ({ className }: { className?: string }) => {
  return (
    <MaxWidthWraper className={cn("relative my-20 space-y-16", className)}>
      <Heading>Our Benefits</Heading>
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
