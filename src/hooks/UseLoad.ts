import { useContext } from "react";
import { LoadContex } from "../context/loadcontext";

export function useLoad() {
  const context = useContext(LoadContex);
  if (!context) {
    throw new Error("useLoad must be used within a LoadProvider");
  }
  return context;
}
