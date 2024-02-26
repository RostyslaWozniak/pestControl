import { Card, CardTitle, CardContent, CardFooter } from "../../ui/card";
import { cn } from "../../../lib/cn";
import { Button } from "../../ui/button";
import { CgArrowLongRight } from "react-icons/cg";
import { MotionValue, motion, useTransform } from "framer-motion";

type LgCardItemProps = {
  scrollYProgress: MotionValue<number>;
  id: number;
  img: string;
  title: string;
  content: string;
  path: string;
  paralaxY: number;
  paralaxX: number;
};

const LgCardItem = ({
  scrollYProgress,
  id,
  img,
  title,
  content,
  path,
  paralaxY,
  paralaxX,
}: LgCardItemProps) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, paralaxY]);
  const x = useTransform(scrollYProgress, [1, 0], [0, paralaxX * id]);
  return (
    <motion.div
      key={id}
      style={{
        y: y,
        x: x,
      }}
      whileHover={{ scale: 1.07 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="hover:z-10"
    >
      <Card
        className={cn(
          "grid w-[400px] min-w-[400px] cursor-default space-y-6 overflow-hidden rounded-[50px] border-2 border-background bg-primary shadow-xl duration-300  hover:shadow-2xl",
        )}
      >
        <img src={img} alt={title} className="h-[350px] object-cover" />
        <CardTitle className="px-10 text-3xl text-background">
          {title}
        </CardTitle>
        <CardContent
          className={cn("grid grow text-background", id !== 3 && "pr-20")}
        >
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <Button
            variant={"outline"}
            className="group space-x-3 italic text-secondary"
          >
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
};

export default LgCardItem;
