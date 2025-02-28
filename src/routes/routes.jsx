// -----------------------------------------------Imports---------------------------------------------
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";

// Lazy Loading 😴
const Home = lazy(() => import("../pages/Home"));
const Blog = lazy(() => import("../pages/Blog"));
const HelpCenter = lazy(() => import("../pages/HelpCenter"));
const Maintenance = lazy(() => import("../pages/Maintenance"));

// ---------------------------------------------------------------------------------------------------

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog/:slug",
        element: <Blog />,
      },
      {
        path: "/help/:slug",
        element: <HelpCenter />,
      },
    ],
  },
]);

export const maintenanceAppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Maintenance />,
  },
]);
