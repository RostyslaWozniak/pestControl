import MaxWidthWraper from "../MaxWidthWraper";
import photo from "../../assets/images/photos/why-us.jpg";
import { FaCheck } from "react-icons/fa6";
import Animate from "../Animation/Animate";
import { smWith } from "../../helpers/globalVariabels";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Heading from "../ui/heading";

const benefitsData = [
  { id: 1, content: "Expertise You Can Trust" },
  { id: 2, content: "Tailored Solutions for Your Needs" },
  { id: 3, content: "Cutting-Edge Techniques and Eco-Friendly Products" },
  { id: 4, content: "Comprehensive Service Guarantee" },
  { id: 5, content: "Transparent Communication and Education" },
  { id: 6, content: "Continuous Support and Follow-Up" },
];

const WhyUsSection = () => {
  const { windowWidth } = useWindowDimensions();
  return (
    <section className="bg-primary  pt-20 text-background sm:space-y-10">
      <Heading className="text-background">Why Choose Us</Heading>
      <MaxWidthWraper className="flex items-center">
        <Animate
          direction="x"
          translate={-200}
          className="z-10 hidden w-[50%]  lg:block"
        >
          <img
            src={photo}
            alt="inspector"
            className="h-[400px] w-full rounded-[50px] object-cover"
          />
        </Animate>
        <ul className="flex h-[550px] flex-col items-start justify-center space-y-5 bg-ant-why-us bg-top bg-no-repeat sm:px-10">
          {benefitsData.map(({ id, content }) => (
            <li
              key={id}
              className="flex items-center gap-4 text-xl sm:gap-8 sm:text-2xl"
            >
              <Animate direction="x" translate={-10} delay={0.1 * id}>
                <FaCheck size={windowWidth < smWith ? 20 : 30} />
              </Animate>

              <p>{content}</p>
            </li>
          ))}
        </ul>
      </MaxWidthWraper>
    </section>
  );
};

export default WhyUsSection;
