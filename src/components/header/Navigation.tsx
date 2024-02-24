import { cn } from "../../lib/cn";

const Navigation = ({ className }: { className?: string }) => {
  const navData = [
    { id: 1, path: "#", name: "services" },
    { id: 2, path: "#", name: "about us" },
    { id: 3, path: "#", name: "contact us" },
  ];
  return (
    <nav>
      <ul className={cn("flex items-center gap-10", className)}>
        {navData.map(({ id, path, name }) => (
          <li key={id}>
            <a className="cursor-pointer capitalize" href={path}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
