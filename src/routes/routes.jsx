// -----------------------------------------------Imports---------------------------------------------
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import Home from "../components/Home/Home";

// ---------------------------------------------------------------------------------------------------


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element:  <DefaultLayout /> ,
    children: [
      {
        path: "/",
        element: <Home/>,
      },

    ],
  },
]);