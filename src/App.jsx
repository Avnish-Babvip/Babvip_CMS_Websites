import { RouterProvider } from "react-router-dom";
import "./App.css";
import { appRouter, maintenanceAppRouter } from "./routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { getAllHeadMenu } from "./features/actions/headMenu";
import { getAllFooterMenu } from "./features/actions/footerMenu";
import { Suspense, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Loader from "./components/Loader/Loader";
import { Toaster } from "sonner";
import { getAllSiteSettings } from "./features/actions/siteSettings";

function App() {
  const dispatch = useDispatch();

  const { siteSetting } = useSelector(
    (state) => state.siteSettings.siteSettingsData
  );

  useEffect(() => {
    dispatch(getAllHeadMenu());
    dispatch(getAllFooterMenu());
    dispatch(getAllSiteSettings());
  }, []);

  useEffect(() => {
    if (siteSetting?.setting_data?.site_favicon) {
      const favicon = document.querySelector("link[rel='icon']");
      if (favicon) {
        favicon.href = `${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
          siteSetting?.setting_data?.site_favicon
        }`;
      }
    }

    const theme = siteSetting?.setting_data?.navigation_type || "light";
    // const theme = "dark";
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [siteSetting]);

  useEffect(() => {
    if (siteSetting?.setting_data?.header_script) {
      // Inject html into head
      document.head.innerHTML += siteSetting?.setting_data?.header_script;
    }
  }, [siteSetting]);

  // useEffect(() => {
  //   // Disable Right Click
  //   const disableRightClick = (event) => {
  //     event.preventDefault();
  //   };

  //   // Disable Copy, Paste, Cut & DevTools Shortcuts
  //   const disableKeyboardShortcuts = (event) => {
  //     if (
  //       event.ctrlKey &&
  //       ["c", "v", "x", "u", "s", "p"].includes(event.key.toLowerCase()) // Prevent Copy, Paste, Cut, View Source, Save
  //     ) {
  //       event.preventDefault();
  //     }
  //     if ([123, 73, 74].includes(event.keyCode) && (event.ctrlKey || event.metaKey)) {
  //       event.preventDefault();
  //     }
  //   };

  //   document.addEventListener("contextmenu", disableRightClick);
  //   document.addEventListener("keydown", disableKeyboardShortcuts);

  //   return () => {
  //     document.removeEventListener("contextmenu", disableRightClick);
  //     document.removeEventListener("keydown", disableKeyboardShortcuts);
  //   };
  // }, []);

  return (
    <>
      {" "}
      <Suspense fallback={<Loader />}>
        <HelmetProvider>
          <Toaster richColors containerClassName="overflow-auto" />

          {siteSetting?.setting_data?.page_is_home === "0" ? (
            <RouterProvider router={maintenanceAppRouter} />
          ) : (
            <RouterProvider router={appRouter} />
          )}
        </HelmetProvider>
      </Suspense>
    </>
  );
}

export default App;
