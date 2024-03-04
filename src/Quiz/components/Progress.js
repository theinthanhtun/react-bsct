import { useQuiz } from "../contexts/QuizContext"

function Progress() {
    const {index,numQues,points,maxPoints,answer} = useQuiz();
    return (
        <header className="progress">
            <progress max={numQues} value={index + Number(answer !== null)} />
            <p>Question <strong>{index + 1}</strong> / {numQues}</p>
            <p><strong>{points}</strong> / {maxPoints}</p>
        </header>
    )
}

export default Progress
