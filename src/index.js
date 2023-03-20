//React
import React from "react";
import ReactDOM from "react-dom/client";

//Styles
import "normalize.css";
import "./css/styles.css";

//Components
import App from "./App";

//Data
import { names } from "./data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App names={names} />
  </React.StrictMode>
);

/**
 **TODO 
 https://egghead.io/lessons/react-reduce-prop-drilling-in-react-with-the-context-api
 https://egghead.io/lessons/react-improve-developer-experience-for-accessing-context-with-a-custom-react-hook
 */
