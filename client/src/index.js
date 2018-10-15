import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Route>
    <App />
  </Route>,
  document.getElementById("root")
);
