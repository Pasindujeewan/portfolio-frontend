import { createContext } from "react";

type themetype = {
  theme: boolean;
  setTheme: (b: boolean) => void;
};

export const themecontext = createContext<themetype | undefined>(undefined);
