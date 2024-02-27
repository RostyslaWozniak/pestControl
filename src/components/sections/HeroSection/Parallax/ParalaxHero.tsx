/** @format */

"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ParallaxCardItem from "./ParallaxCardItem";
import HeroContent from "../HeroContent";
import { servicesCardData } from "../../../../data/servicesCardData";

export const HeroParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [50, 0]),
    springConfig,
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.8, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-50, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-500, 0]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-300, 0]),
    springConfig,
  );
  return (
    <section
      ref={ref}
      className="relative flex flex-col overflow-hidden  pb-48 [perspective:1000px] [transform-style:preserve-3d]"
    >
      <HeroContent className="mx-0 w-[50%] self-end pt-48" />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          translateX,
          scale,
        }}
        className="relative z-20 justify-self-start"
      >
        <motion.div className="flex items-center justify-center">
          {servicesCardData.map((props) => (
            <ParallaxCardItem
              key={props.id}
              scrollYProgress={scrollYProgress}
              {...props}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
