import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./TestComponent/App";
// import DateCounter from "./TestComponent/DateCounter";
// import Questions from "./TestComponent/Questions.js";
// import DateCounterCha from ".TestComponent/DateCounterCha.js";
// import TipCalculator from "./TestComponent/TipCalculator.js";
// import ListFriends from "./ListFriends/App.js";
import App from "./PopCorn/App2.js";
import StarRating from "./PopCorn/StarRating.js";
import ChallengeCurrencyConveter from "./Challenge-Currency-Conveter/Challenge-Currency-Conveter.js"
// import ChallengeTextExpander from './Challenge/ChallengeTextExpander.js';
// function Test() {
//   const [movieRating,setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movies was reated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <ChallengeCurrencyConveter /> */}
    {/* <StarRating maxRating={5} messages={['Beautiful','Awesome','Good','Amazing','Gerogeous']} />
    <StarRating size={50} color="red" maxRating={5} className="test" defaultRating={5} /> */}
    {/* <ChallengeTextExpander /> */}
    {/* <ListFriends /> */}
  </React.StrictMode>
);
