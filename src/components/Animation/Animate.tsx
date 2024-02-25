import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

type AnimateProps = {
  children: React.ReactNode;
  direction: "x" | "y";
  delay?: number;
  translate?: number;
  duration?: null | number;
  once?: boolean;
  className?: string;
};

const Animate = ({
  children,
  direction,
  delay = 0,
  translate = 50,
  duration = null,
  once = true,
  className,
}: AnimateProps) => {
  if (duration) {
    return (
      <motion.div
        initial={{
          translateY: translate,
          opacity: 0,
        }}
        whileInView={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          delay,
          duration,
        }}
        viewport={{ once }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    );
  }
  if (direction === "y") {
    return (
      <motion.div
        initial={{
          translateY: translate,
          opacity: 0,
        }}
        whileInView={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          delay,
        }}
        viewport={{ once }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    );
  } else {
    return (
      <motion.div
        initial={{
          translateX: translate,
          opacity: 0,
        }}
        whileInView={{
          translateX: 0,
          opacity: 1,
        }}
        transition={{
          delay: delay,
        }}
        viewport={{ once }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    );
  }
};

export default Animate;
