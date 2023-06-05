import { React, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Main />
  </StrictMode>
);
