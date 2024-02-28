import { cn } from "../../lib/cn";

type TextProps = {
  className?: string;
  children: React.ReactNode;
};
const Text = ({ className, children }: TextProps) => {
  return <p className={cn("indent-10 text-lg", className)}>{children}</p>;
};

export default Text;
