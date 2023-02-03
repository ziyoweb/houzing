import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import RootContext from "./context";
import "antd/dist/reset.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootContext>
      <Root />
    </RootContext>
  </React.StrictMode>
);
