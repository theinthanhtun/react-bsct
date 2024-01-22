import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./TestComponent/App";
// import DateCounter from "./TestComponent/DateCounter";
// import Questions from "./TestComponent/Questions.js";
// import DateCounterCha from ".TestComponent/DateCounterCha.js";
// import TipCalculator from "./TestComponent/TipCalculator.js";
import ListFriends from "./ListFriends/App.js"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ListFriends />
  </React.StrictMode>
);
