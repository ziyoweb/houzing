import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { navbar } from "../utils/navbar";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(({ id, path, element }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Route>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </Router>
  );
};

export default Root;
