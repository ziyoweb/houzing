import React, { lazy, Suspense } from "react";
import Signin from "../components/Signin";
import useUniqueId from "../hooks/useId";

const HomePage = lazy(() => import("../pages/Home"));
const PropertiesPage = lazy(() => import("../pages/Properties"));
const HouseItemPage = lazy(() => import("../pages/HouseItem"));

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
    element: (
      <Suspense fallback={<React.Fragment>loading...</React.Fragment>}>
        <HouseItemPage />
      </Suspense>
    ),
    title: "Single House",
    path: "/properties/:id",
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    element: <Signin />,
    title: "Signin",
    path: "signin",
    private: false,
    hidden: true,
  },
];
