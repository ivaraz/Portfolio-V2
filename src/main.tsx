import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { routerNav } from "./router/routerNav";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routerNav} />
  </StrictMode>
);
