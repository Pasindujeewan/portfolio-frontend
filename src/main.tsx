import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./route/route.tsx";
import { Loadprovider } from "./context/Loadingcontext.tsx";
import { Themeprovider } from "./context/ThemecontextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Loadprovider>
      <Themeprovider>
        <RouterProvider router={Router} />
      </Themeprovider>
    </Loadprovider>
  </StrictMode>
);
