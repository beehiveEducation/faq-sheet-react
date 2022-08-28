import React, {useState} from 'react'
import './Question.css';



const Question = (props) => {

    const [answerToShow, setanswerToShow] = useState(props.show || false)


//handle a click function

const showAnswer = () => {
    setanswerToShow(!answerToShow)
}

    return (<>


<div className="qnaContainer">
    <div className="question" onClick={showAnswer}>{props.myQuestion}</div>
    <div className={`answer ${answerToShow ? '' : 'hidden'}`}>{props.myAnswer}</div>
</div>
    
    </>  
    )
}

export default Question;