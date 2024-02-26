import { useNavContext } from "../../context/NavContext";
import { backgroundColor, secondaryColor } from "../../helpers/globalVariabels";
import { cn } from "../../lib/cn";

const BurgerBtn = () => {
  const { isBurgerNavActive, setIsBurgerNavActive } = useNavContext();
  function handleBurgerButtonClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.stopPropagation();
    setIsBurgerNavActive(!isBurgerNavActive);
  }
  return (
    <button
      className="relative h-[20px] w-[30px] py-3 lg:hidden "
      onClick={handleBurgerButtonClick}
    >
      <span
        className={cn(
          "absolute left-0 top-0 h-[3px] w-full rounded bg-secondary duration-300",
        )}
        style={{
          top: isBurgerNavActive ? "50%" : "0",
          transform: isBurgerNavActive
            ? "translateY(-50%) rotate(-45deg)"
            : "translateY(0) rotate(0)",
          backgroundColor: isBurgerNavActive ? backgroundColor : secondaryColor,
        }}
      />
      <span
        className="absolute right-0 top-[50%] h-[3px] w-full translate-y-[-50%] rounded bg-secondary duration-300"
        style={{
          display: isBurgerNavActive ? "none" : "block",
          backgroundColor: isBurgerNavActive ? backgroundColor : secondaryColor,
        }}
      />
      <span
        className="absolute bottom-0 left-0 h-[3px] w-full rounded bg-secondary duration-300"
        style={{
          bottom: isBurgerNavActive ? "50%" : "0",
          transform: isBurgerNavActive
            ? "translateY(50%) rotate(45deg)"
            : "translateY(0) rotate(0)",
          backgroundColor: isBurgerNavActive ? backgroundColor : secondaryColor,
        }}
      />
    </button>
  );
};

export default BurgerBtn;
