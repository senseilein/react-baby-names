//React
import React from "react";
import ReactDOM from "react-dom/client";

//Styles
import "normalize.css";
import "./css/styles.css";

//Components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
