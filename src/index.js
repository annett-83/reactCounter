import React from "react";
import reactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
