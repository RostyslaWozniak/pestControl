import { navData } from "../../data/navigation";
import { cn } from "../../lib/cn";

const Navigation = ({ className }: { className?: string }) => {
  return (
    <nav>
      <ul className={cn("flex items-center gap-10", className)}>
        {navData.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
