import { Link } from "react-router-dom";
import { cn } from "../../../lib/cn";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      className={cn("text-2xl font-medium", className)}
      to="/"
    >
      PestControl
    </Link>
  );
};

export default Logo;
