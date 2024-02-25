function StartScreen({numQues, disptach}) {
    return (
        <div className="start">
            <h2>Welcome to the React Quiz!</h2>
            <h3>{numQues} questions to test the React Mastery</h3>
            <button className="btn btn-ui" onClick={(e)=>disptach({type:'start'})} >Let's start</button>
        </div>
    )
}

export default StartScreen
