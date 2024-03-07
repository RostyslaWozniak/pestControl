import { address, email, phoneNumber } from "../../../data/contactData";
import MaxWidthWraper from "../../MaxWidthWraper";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import Form from "./contactForm/Form";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { smWith } from "../../../helpers/globalVariabels";
import Text from "../../ui/text";
import Heading from "../../ui/heading";

// eslint-disable-next-line react-refresh/only-export-components
export const contactElements = [
  {
    id: 1,
    name: "address",
    value: address,
    icon: <CiLocationOn size={50} strokeWidth={0.2} />,
    action: undefined,
  },
  {
    id: 2,
    name: "phone",
    value: phoneNumber,
    icon: <FiPhone size={50} strokeWidth={1} />,
    action: `tel: ${phoneNumber}`,
  },
  {
    id: 3,
    name: "email",
    value: email,
    icon: <CiMail size={50} strokeWidth={0.1} />,
    action: `mailto: ${email}`,
  },
];
const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const { windowWidth } = useWindowDimensions();
  const x = useTransform(scrollYProgress, [0, 0.4], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  return (
    <section
      ref={ref}
      className="overflow-hidden bg-primary py-20 text-background"
    >
      <Heading className="mb-5 text-background">Contact Us</Heading>
      <MaxWidthWraper className="flex flex-col-reverse items-center lg:gap-10 xl:flex-row">
        <motion.div
          className="mx-auto w-[min(600px,100%)] space-y-10 pt-4 xl:w-[50%]"
          style={{
            x: useTransform(scrollYProgress, [0, 0.4], [-300, 0]),
            opacity: useTransform(scrollYProgress, [0, 0.4], [0, 1]),
          }}
        >
          <Text className="">
            We're here to help you reclaim your space from pests and create a
            healthier environment for you and your family or business. Reach out
            to us today to schedule an appointment or inquire about our
            services. Our friendly team is ready to assist you with any
            questions or concerns you may have.
          </Text>
          <ul className="flex flex-col space-y-8">
            {contactElements.map(({ id, value, icon, action }) => (
              <li
                key={id}
                className="flex items-center space-x-10 rounded-full bg-primary py-1 pl-5 lg:space-x-20"
              >
                {icon}
                <a
                  className="font-bold sm:text-2xl sm:font-normal"
                  href={action}
                >
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        {windowWidth < smWith ? (
          <Form />
        ) : (
          <motion.div
            className="w-full lg:w-[50%]"
            style={{
              x,
              opacity,
            }}
          >
            <Form />
          </motion.div>
        )}
      </MaxWidthWraper>
    </section>
  );
};

export default ContactSection;
