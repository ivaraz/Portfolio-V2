import { RouteObject } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Certificate from "../pages/Certificate";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
import Skills from "../pages/Skills";

export interface AppRoute extends RouteObject {
  name?: string;
  children?: AppRoute[];
}

const routes: AppRoute[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home />, name: "Home" },
      
      { path: "about", element: <About />, name: "About" },
      { path: "certificate", element: <Certificate />, name: "Certificate" },
      { path: "contact", element: <Contact />, name: "Contact" },
      { path: "project", element: <Project />, name: "Project" },
      { path: "skills", element: <Skills />, name: "Skills" },
    ],
  },
];

export default routes;