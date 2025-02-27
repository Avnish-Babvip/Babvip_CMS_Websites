// ----------------------------------Imports--------------------------------------
import React, { lazy, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
const Footer = lazy(() => import("../Footer/Footer"));
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Toaster } from "sonner";

// --------------------------------------------------------------------------------

const DefaultLayout = () => {
  const { pathname } = useLocation(); // Get the current route

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]); // Runs when route changes

  return (
    <div>
      {/* <ErrorBoundary> */}
      <Header />
      <Outlet />
      <Footer />
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default DefaultLayout;
