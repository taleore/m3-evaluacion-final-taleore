import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter } from "react-router-dom";
import App from "./Components/App";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
