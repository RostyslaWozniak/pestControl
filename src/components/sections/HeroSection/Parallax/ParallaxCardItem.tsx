/** @format */
import { MotionValue, motion, useTransform } from "framer-motion";
import { cn } from "../../../../lib/cn";
import { Button } from "../../../ui/button";
import { CgArrowLongRight } from "react-icons/cg";

type CardItemProps = {
  scrollYProgress: MotionValue<number>;
  id: number;
  img: string;
  title: string;
  content: string;
  path: string;
};

const ParallaxCardItem = ({
  scrollYProgress,
  id,
  img,
  title,
  content,
  path,
}: CardItemProps) => {
  const initialY =
    (id === 1 && -110) || (id === 2 && -110) || (id === 3 && -110);
  const initialX = (id === 1 && 250) || (id === 2 && 1) || (id === 3 && -250);
  const paralaxY = (id === 1 && 10) || (id === 2 && 60) || (id === 3 && 120);
  const paralaxX = (id === 1 && 30) || (id === 2 && 1) || (id === 3 && -30);
  return (
    <motion.div
      key={id}
      style={{
        translateY: useTransform(
          scrollYProgress,
          [0, 0.2],
          [initialY, paralaxY],
        ),
        translateX: useTransform(
          scrollYProgress,
          [0, 0.2],
          [initialX, paralaxX],
        ),
      }}
      // whileHover={{ scale: 1.05 }}
      // transition={{ type: "spring", stiffness: 400, damping: 10 }}
      // className="hover:z-10"
    >
      <div
        className={cn(
          "flex min-h-[630px] w-[350px] cursor-default flex-col items-start justify-between overflow-hidden rounded-[50px] border-2 border-background  bg-primary shadow-2xl hover:shadow-2xl",
        )}
      >
        <img src={img} alt={title} className="h-[250px] w-full object-cover" />

        <h3 className="pl-5 text-3xl text-background">{title}</h3>

        <p className={cn("px-5 text-background")}>{content}</p>
        <Button
          variant={"outline"}
          className="group mx-5 my-2 mb-6 space-x-3 italic text-secondary"
        >
          <a href={path}>Learn more</a>
          <CgArrowLongRight
            className="mt-1 transition-transform duration-200 group-hover:translate-x-4"
            size={30}
          />
        </Button>
      </div>
    </motion.div>
  );
};

export default ParallaxCardItem;
