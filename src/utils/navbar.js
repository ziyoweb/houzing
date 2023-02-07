import React, { lazy, Suspense } from "react";
import useUniqueId from "../hooks/useId";

const HomePage = lazy(() => import("../pages/Home"));
const PropertiesPage = lazy(() => import("../pages/Properties"));
// import HomePage from "../pages/Home";
// import PropertiesPage from "../pages/Properties";

export const navbar = [
  {
    id: useUniqueId,
    element: (
      <Suspense fallback={<React.Fragment>loading...</React.Fragment>}>
        <HomePage />
      </Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: (
      <Suspense fallback={<React.Fragment>loading...</React.Fragment>}>
        <PropertiesPage />
      </Suspense>
    ),
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: <h1>This is Sign in page</h1>,
    title: "Properties",
    path: "/signin",
    private: false,
    hidden: true,
  },
];
