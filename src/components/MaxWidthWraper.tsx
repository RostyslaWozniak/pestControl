import { cn } from "../lib/cn";

type MaxWidthWraperProps = {
  children: React.ReactNode;
  className?: string;
};
const MaxWidthWraper = ({ children, className = "" }: MaxWidthWraperProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWraper;
