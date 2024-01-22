import { useState } from "react"

export default function DateCounterCha(){
    const [step,setStep] = useState(1);
    const [count,setCount] = useState(0);
    return (
        <div className="row">
            <input type="range" min="0" max="10" value={step} onChange={(e) => setStep(Number(e.target.value))} />
            <div>
                <button onClick={() => setStep((e) => e - 1)}>-</button>
                <span>Step: {step}</span>
                <button  onClick={() => setStep((e) => e + 1)}>+</button>
            </div>
            <div>
                <button  onClick={() => setCount((e) => e - step)}>-</button>
                <span>Count: {count}</span>
                <button onClick={() => setCount((e) => e + step)}>+</button>
            </div>
            <p>{count} {count === 0 ? 'Today' : 'from'} is {new Date().toString().split(' ').slice(0,4).join(' ')}</p>
            {count !== 0 || step !== 1 ? (
                <div><button onClick={() => {setCount(0);setStep(1)}}>Reset</button></div>
            ) : null}
        </div>
    )
}