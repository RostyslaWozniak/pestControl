/* eslint-disable react-hooks/rules-of-hooks */

import MaxWidthWraper from "../MaxWidthWraper";
import { Card, CardTitle, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { CgArrowLongRight } from "react-icons/cg";
import { cn } from "../../lib/cn";

import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import { servicesCardData } from "../../data/servicesCardData";

const ServicesCardsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={ref}
      className="space-y-20 bg-services-cards bg-cover pb-80 pt-28"
    >
      <h2 className="text-center text-4xl font-bold text-black-75">
        Our Services
      </h2>
      <MaxWidthWraper className="flex">
        {servicesCardData.map(
          ({ id, img, title, content, path, paralaxY, paralaxX }) => {
            const y = useTransform(scrollYProgress, [0, 1], [0, paralaxY]);
            const x = useTransform(scrollYProgress, [1, 0], [0, paralaxX * id]);
            return (
              <motion.div
                key={id}
                style={{
                  y: y,
                  x: x,
                }}
              >
                <Card
                  className={cn(
                    "grid w-[400px] min-w-[400px] space-y-6 overflow-hidden rounded-[50px] border-2 border-background bg-primary shadow-xl duration-300 hover:scale-[102%] hover:shadow-2xl",
                  )}
                >
                  <img
                    src={img}
                    alt={title}
                    className="h-[350px] object-cover"
                  />
                  <CardTitle className="px-10 text-3xl text-background">
                    {title}
                  </CardTitle>
                  <CardContent
                    className={cn(
                      "grid grow text-background",
                      id !== 3 && "pr-20",
                    )}
                  >
                    <p>{content}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant={"outline"} className="group space-x-3">
                      <a href={path}>Learn more</a>
                      <CgArrowLongRight
                        className="mt-1 transition-transform duration-200 group-hover:translate-x-4"
                        size={30}
                      />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          },
        )}
      </MaxWidthWraper>
    </section>
  );
};

export default ServicesCardsSection;
