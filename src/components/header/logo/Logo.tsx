import { cn } from "../../../lib/cn";

const Logo = ({ className }: { className?: string }) => {
  return (
    <a className={cn("text-2xl font-medium", className)} href="/">
      PestControl
    </a>
  );
};

export default Logo;
