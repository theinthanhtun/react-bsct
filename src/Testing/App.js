import { useReducer } from "react"

export default function App(){
    const initialState = {count: 0,step: 1};
    function reducer(state,action){
        console.log(state,action)
        switch (action.type){
            case 'ADJ':
                return {...state, step: action.payload};
            case 'TYP':
                return {...state, count: action.payload};
            case 'INC':
                return {...state, count: state.count + state.step};
            case 'DEC':
                return {...state, count: state.count - state.step};
            default: throw new Error('Unknown Action');
        }
    }

    const [state,dispatch] = useReducer(reducer,initialState);
    const {count,step} = state;
    return (
        <>
            <input style={{display:"block"}} type="range" max={10} min={1} onChange={(e) => dispatch({type: 'ADJ',payload: Number(e.target.value)})} value={step} />
            <p>{step}</p>
            <input onChange={(e) => dispatch({type: 'TYP',payload: Number(e.target.value)})}  style={{padding: 10}} value={count} type="text" />
            <button onClick={(e) => dispatch({type: 'INC'})} style={{padding: 10}}>+</button>
            <button onClick={(e) => dispatch({type: 'DEC'})} style={{padding: 10}}>-</button>
        </>
    )
}