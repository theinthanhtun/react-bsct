import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DateCounter from "./DateCounter";
import Questions from "./Questions.js";
import DateCounterCha from "./DateCounterCha.js";
import TipCalculator from "./TipCalculator.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TipCalculator />
  </React.StrictMode>
);
