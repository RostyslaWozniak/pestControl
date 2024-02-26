import Animate from "../Animation/Animate";
import MaxWidthWraper from "../MaxWidthWraper";
const orderStepsData = [
  {
    id: 1,
    title: "Contact Us",
    content: "Reach out via website, email, or phone for assistance.",
  },
  {
    id: 2,
    title: "Consultation",
    content: "Schedule an assessment to evaluate your pest control needs.",
  },
  {
    id: 3,
    title: "Custom Plan",
    content: "Receive a tailored treatment plan based on assessment findings.",
  },
  {
    id: 4,
    title: "Get a Quote",
    content: "Review detailed pricing for the recommended services.",
  },
  {
    id: 5,
    title: "Schedule Service",
    content: "Book an appointment convenient for you.",
  },
  {
    id: 6,
    title: "Professional Service",
    content:
      "Expert technicians arrive equipped to deliver effective treatment.",
  },
];
const OrderStepsSection = () => {
  return (
    <section className="overflow-hidden pb-40 pt-20">
      <MaxWidthWraper className="space-y-20">
        <h2 className="text-center text-3xl font-bold text-black-75 sm:text-4xl">
          6 Easy Steps to Order Our Services
        </h2>
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2  sm:gap-x-20 sm:gap-y-32 md:grid-cols-3">
          {orderStepsData.map(({ id, title, content }) => (
            <Animate
              direction="y"
              translate={200}
              delay={id * 0.05}
              key={id}
              className="relative space-y-10 text-center"
            >
              <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 border-0 text-[200px] font-bold text-[#74B1CF]/20 sm:text-[250px]">
                {id}
              </div>
              <h3 className="text-2xl font-medium text-black-75 sm:text-3xl">
                {title}
              </h3>
              <p className="text-lg sm:text-xl">{content}</p>
            </Animate>
          ))}
        </div>
      </MaxWidthWraper>
    </section>
  );
};

export default OrderStepsSection;
