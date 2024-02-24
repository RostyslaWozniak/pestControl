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
    id: 6,
    title: "Professional Service",
    content:
      "Expert technicians arrive equipped to deliver effective treatment.",
  },
  {
    id: 5,
    title: "Schedule Service",
    content: "Book an appointment convenient for you.",
  },
  {
    id: 4,
    title: "Get a Quote",
    content: "Review detailed pricing for the recommended services.",
  },
];
const OrderStepsSection = () => {
  return (
    <section className="pb-40 pt-20">
      <MaxWidthWraper className="space-y-20">
        <h2 className="text-black-75 text-center text-4xl font-bold">
          6 Easy Steps to Order Our Services
        </h2>
        <div className="grid grid-cols-3 gap-x-20 gap-y-32">
          {orderStepsData.map(({ id, title, content }) => (
            <div key={id} className="relative space-y-10 text-center">
              <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 border-0 text-[250px] font-bold text-[#74B1CF]/20">
                {id}
              </div>
              <h3 className="text-black-75 text-3xl font-medium">{title}</h3>
              <p className="text-xl">{content}</p>
            </div>
          ))}
        </div>
      </MaxWidthWraper>
    </section>
  );
};

export default OrderStepsSection;
