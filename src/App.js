import React from "react"
import Question from './components/Question.js'
import './App.css';

function App() {

  const questions = [
    {
        question: "How many bones does a cat have?",
        answer: "A cat has 230 bones - 6 more than a human",
    },
    {
        question: "How much do cats sleep?",
        answer: "The average cat sleeps 12-16 hours per day",
    },
    {
        question: "How long do cats live",
        answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
]

console.log(questions[0].question)

  return (<>

    <div className="App">
    <h2>FAQ</h2>

      {questions.map((eachQuestion, idx) => {
        return <>
       {idx === 0 && <Question show={true} myQuestion={eachQuestion.question}  myAnswer={eachQuestion.answer}/>}
        {idx !== 0 && <Question myQuestion={eachQuestion.question}  myAnswer={eachQuestion.answer}/>}
        </>}
        )}
      
 
    </div>
    </>
  );
}

export default App;
