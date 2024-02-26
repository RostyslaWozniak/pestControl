import { address, email, phoneNumber } from "../../data/contactData";
import MaxWidthWraper from "../MaxWidthWraper";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Form from "../contactForm/Form";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { smWith } from "../../helpers/globalVariabels";

// eslint-disable-next-line react-refresh/only-export-components
export const contactElements = [
  {
    id: 1,
    name: "address",
    value: address,
    icon: <IoLocationOutline size={50} />,
    action: undefined,
  },
  {
    id: 2,
    name: "phone",
    value: phoneNumber,
    icon: <FiPhone size={50} />,
    action: `tel: ${phoneNumber}`,
  },
  {
    id: 3,
    name: "email",
    value: email,
    icon: <MdOutlineEmail size={50} />,
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
      className="overflow-hidden bg-primary py-28 text-background"
    >
      <h2 className="text-center text-5xl font-bold text-background">
        Contact Us
      </h2>
      <MaxWidthWraper className="flex flex-col-reverse items-center gap-20 xl:flex-row">
        <motion.div
          className="mx-auto space-y-20 lg:w-[50%]"
          style={{
            x: useTransform(scrollYProgress, [0, 0.4], [-300, 0]),
            opacity: useTransform(scrollYProgress, [0, 0.4], [0, 1]),
          }}
        >
          <p className="text-xl">
            We're here to help you reclaim your space from pests and create a
            healthier environment for you and your family or business. Reach out
            to us today to schedule an appointment or inquire about our
            services. Our friendly team is ready to assist you with any
            questions or concerns you may have.
          </p>
          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {contactElements.map(({ id, value, icon, action }) => (
              <li
                key={id}
                className="flex flex-col items-center space-y-5 text-center"
              >
                {icon}
                <a className="text-xl text-black-5" href={action}>
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
