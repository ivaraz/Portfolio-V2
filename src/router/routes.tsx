import { RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CertificatePage from "../pages/CertificatePage";
import ContactPage from "../pages/ContactPage";
import SkillsPage from "../pages/SkillsPage";
import MainLayout from "../Layout/MainLayout";
import ProjectPage from '../pages/ProjectPage'

export interface AppRoute extends RouteObject {
  name?: string;
  children?: AppRoute[];
}

const routes: AppRoute[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage />, name: "Home" },
      { path: "/about", element: <AboutPage />, name: "About" },
      { path: "/certificate", element: <CertificatePage />, name: "Certificate" },
      { path: "/contact", element: <ContactPage />, name: "Contact" },
      { path: "/project", element: <ProjectPage />, name: "Project" },
      { path: "/skills", element: <SkillsPage />, name: "Skills" },
    ],
  },
];

export default routes;
