import { useEffect } from "react";
import { useState } from "react";
import { LoadContex } from "./loadcontext";

type Props = {
  children: React.ReactNode;
};

export function Loadprovider({ children }: Props) {
  const [load, setload] = useState(true);

  useEffect(() => {
    if (load) {
      const inter = setTimeout(() => setload(false), 2000);
      return () => {
        clearTimeout(inter);
      };
    }
  }, [load]);

  return (
    <LoadContex.Provider value={{ load, setload }}>
      {children}
    </LoadContex.Provider>
  );
}
