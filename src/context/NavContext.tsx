import { ReactNode, useContext, createContext, useState } from "react";
import { lgWidth } from "../helpers/globalVariabels";
import useWindowDimensions from "../hooks/useWindowDimensions";

type NavContextProviderProps = {
  children: ReactNode;
};

export type NavContext = {
  isBurgerNavActive: boolean;
  isDesctopWidth: boolean;
  setIsBurgerNavActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavContext = createContext({} as NavContext);

// eslint-disable-next-line react-refresh/only-export-components
export function useNavContext() {
  return useContext(NavContext);
}

export function NavContextProvider({ children }: NavContextProviderProps) {
  const [isBurgerNavActive, setIsBurgerNavActive] = useState(false);
  document.body.addEventListener("click", () => setIsBurgerNavActive(false));
  const { windowWidth } = useWindowDimensions();
  const isDesctopWidth = lgWidth >= windowWidth;

  return (
    <NavContext.Provider
      value={{
        isBurgerNavActive,
        isDesctopWidth,
        setIsBurgerNavActive,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}
