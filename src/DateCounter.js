import { useState } from "react";

export default function DateCounter() {
  const currentDate = new Date();
  const [day, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const increaseStep = () => {
    setStep((s) => s + 1);
  };
  const decreaseStep = () => {
    setStep((s) => s - 1);
  };
  const increaseCount = () => {
    setCount((d) => d + step);
  };
  const decreaseCount = () => {
    setCount((d) => d - step);
  };

  return (
    <div className="row">
      <div style={{ display: "flex" }}>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <p>Count: {day}</p>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <dvi>
        {day}{" "}
        {day === 0
          ? "Today is"
          : day < 0
          ? "days from today is"
          : "days ago was"}{" "}
        was date {`${currentDate.toString().split(" ").slice(0, 4).join(" ")}`}
      </dvi>
    </div>
  );
}
