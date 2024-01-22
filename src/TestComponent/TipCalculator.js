import { useState } from "react";

export default function TipCalculator() {
  return (
    <div className="hello">
      <TipCalc />
    </div>
  );
}
const TipCalc = () => {
  const [bill, setBill] = useState("");
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);
  const tip = (bill * (percent1 + percent2)) / 2 / 100;
  const handleReset = () => {
    setBill(0);
    setPercent1(0);
    setPercent2(0);
  };
  return (
    <div className="hello">
      <Bill bill={bill} onSetbill={setBill} />
      <ServiceBonus percent={percent1} onSetPercent={setPercent1}>
        {" "}
        How did you like the services?
      </ServiceBonus>
      <ServiceBonus percent={percent2} onSetPercent={setPercent2}>
        {" "}
        How did your fiend like the service?
      </ServiceBonus>
      {bill > 0 && (
        <>
          <TotalTips bill={bill} tip={tip} />
          <ResetBtn handleReset={handleReset} />
        </>
      )}
    </div>
  );
};
const Bill = ({ bill, onSetbill }) => {
  return (
    <div>
      <h3>How much was the bill ?</h3>
      <input
        onChange={(e) => onSetbill(Number(e.target.value))}
        value={bill}
        type="text"
      />
    </div>
  );
};
const ServiceBonus = ({ children, percent, onSetPercent }) => {
  return (
    <div>
      <h3>{children}</h3>
      <p>
        <select
          value={percent}
          onChange={(e) => onSetPercent(Number(e.target.value))}
        >
          <option value={0}>Dissafisfied </option>
          <option value={10}>It was good (10%)</option>
          <option value={15}>It was Greate (15%)</option>
          <option value={20}>It was Excellent (20%)</option>
        </select>
      </p>
    </div>
  );
};

const TotalTips = ({ bill, tip }) => {
  return (
    <div>
      You pay ${bill} ( ${bill} + ${tip} tip )
    </div>
  );
};
const ResetBtn = ({ handleReset }) => {
  return <button onClick={handleReset}>Reset</button>;
};
