import React, { lazy, Suspense } from "react";
import RegistrationPage from "../pages/Registration";
import useUniqueId from "../hooks/useId";

const HomePage = lazy(() => import("../pages/Home"));
const PropertiesPage = lazy(() => import("../pages/Properties"));
const HouseItemPage = lazy(() => import("../pages/HouseItem"));
const FavouritePage = lazy(() => import("../pages/Favourite"));
const MyProfilePage = lazy(() => import("../pages/MyProfile"));
const AddNewHousePage = lazy(() => import("../pages/AddNewHouse"));

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
    element: <RegistrationPage />,
    title: "Registration",
    path: "registration",
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    element: (
      <Suspense fallback={<React.Fragment>loading...</React.Fragment>}>
        <FavouritePage />
      </Suspense>
    ),
    title: "Favourite",
    path: "favourite",
    private: true,
    hidden: true,
  },
  {
    id: useUniqueId,
    element: (
      <Suspense fallback={<React.Fragment>loading...</React.Fragment>}>
        <MyProfilePage />
      </Suspense>
    ),
    title: "MyProfile",
    path: "my-profile",
    private: true,
    hidden: true,
  },
  {
    id: useUniqueId,
    element: (
      <Suspense fallback={<React.Fragment>loading...</React.Fragment>}>
        <AddNewHousePage />
      </Suspense>
    ),
    title: "Add New House",
    path: "my-profile/newhouse",
    private: true,
    hidden: true,
  },
];
