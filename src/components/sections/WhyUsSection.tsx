import MaxWidthWraper from "../MaxWidthWraper";
import photo from "../../assets/images/photos/why-us.jpg";
import { FaCheck } from "react-icons/fa6";

const benefitsData = [
  { id: 1, content: "Expertise You Can Trust" },
  { id: 2, content: "Tailored Solutions for Your Needs" },
  { id: 3, content: "Cutting-Edge Techniques and Eco-Friendly Products" },
  { id: 4, content: "Comprehensive Service Guarantee" },
  { id: 5, content: "Transparent Communication and Education" },
  { id: 6, content: "Continuous Support and Follow-Up" },
];

const WhyUsSection = () => {
  return (
    <section className="space-y-10 bg-primary pb-10 pt-20 text-background">
      <h2 className=" text-center text-4xl  font-bold">Why Choose Us</h2>
      <MaxWidthWraper className="flex items-center">
        <div className="w-[50%]">
          <img src={photo} alt="inspector" className="w-full rounded-[50px]" />
        </div>
        <ul className="bg-ant-why-us space-y-5 bg-center  bg-no-repeat px-10 py-24">
          {benefitsData.map(({ id, content }) => (
            <li key={id} className="flex items-center gap-8 text-2xl">
              <FaCheck size={30} />
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </MaxWidthWraper>
    </section>
  );
};

export default WhyUsSection;