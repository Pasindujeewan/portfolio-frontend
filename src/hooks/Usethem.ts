import { useContext } from "react";
import { themecontext } from "../context/themcontex";

export function UseTheme() {
  const context = useContext(themecontext);

  if (!context) {
    throw new Error("A error occuur");
  }
  return context;
}
