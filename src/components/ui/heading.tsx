import { cn } from "../../lib/cn";

type HeadingProps = {
  className?: string;
  children: React.ReactNode;
};
const Heading = ({ className, children }: HeadingProps) => {
  return (
    <h2
      className={cn(
        "text-center text-3xl font-bold text-black-75 sm:text-4xl",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
