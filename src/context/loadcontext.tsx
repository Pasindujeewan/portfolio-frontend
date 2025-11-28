import { createContext } from "react";

interface LoadData {
  load: boolean;
  setload: (l: boolean) => void;
}

export const LoadContex = createContext<LoadData | undefined>(undefined);
