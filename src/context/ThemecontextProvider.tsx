import { useState } from "react";
import { themecontext } from "./themcontex";

type Props = {
  children: React.ReactNode;
};

export function Themeprovider({ children }: Props) {
  const [theme, setTheme] = useState(false);

  if (theme) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  return (
    <themecontext.Provider value={{ theme, setTheme }}>
      {children}
    </themecontext.Provider>
  );
}
