import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Education } from "../pages/Education";
import { Project } from "../pages/Project";
import { About } from "../pages/About";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Education",
        element: <Education />,
      },
      {
        path: "Project",
        element: <Project />,
      },
      {
        path: "About",
        element: <About />,
      },
    ],
  },
]);
