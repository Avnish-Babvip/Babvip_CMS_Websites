// -----------------------------------------------Imports---------------------------------------------
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";

// Lazy Loading 😴
const DynamicRootPage = lazy(() => import("../pages/DynamicRootPage"));
const Blog = lazy(() => import("../pages/Blog"));
const HelpCenter = lazy(() => import("../pages/HelpCenter"));
const Maintenance = lazy(() => import("../pages/Maintenance"));
const Portfolio = lazy(() => import("../pages/Portfolio"));

// ---------------------------------------------------------------------------------------------------

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <DynamicRootPage />,
      },
      {
        path: "/:slug",
        element: <DynamicRootPage />,
      },
      {
        path: "/blog/:slug",
        element: <Blog />,
      },
      {
        path: "/help/:slug",
        element: <HelpCenter />,
      },
      {
        path: "/portfolio/:slug",
        element: <Portfolio />,
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
