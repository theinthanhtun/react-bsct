import { useState } from "react";

export default function App() {
    return (
      <div className="Questions">
        <FlashCards />
      </div>
    );
  }
  
  const questions = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript",
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components",
    },
    {
      id: 8832,
      question: "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX",
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props",
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook",
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element",
    },
  ];
  
  function FlashCards() {

    const [selectedID, setselectedID] = useState(null);

    // const handleClick = (id) => {
    //   setselectedID(id)
    // }

    return (
        <div className="row flashcards">
            {questions.map((ques) => (
                <div className={ques.id === selectedID ? 'selected' : ''} onClick={() => setselectedID(selectedID !== ques.id ? ques.id : null)} key={ques.id}><p>{ques.id === selectedID ? ques.answer : ques.question}</p></div>
            ))}
        </div>
    )
  }
  