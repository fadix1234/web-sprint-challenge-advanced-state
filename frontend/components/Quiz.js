import React from 'react'
import {connect} from 'react-redux'
import { fetchQuiz, selectAnswer } from '../state/action-creators'
import { useEffect } from 'react'

 function Quiz(props) { 
  console.log(props)
  useEffect (()=> {
   if (!props.quiz){
    props.fetchQuiz()
   }
  }, [])
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
         props.quiz ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer${props.quiz.answers[0].answer_id === props.selectedAnswer?.answer_id? ' selected': ''}`}>
                {props.quiz.answers[0].text}
                <button onClick = {()=>props.selectAnswer(props.quiz.answers[0])}>
                  
                  {props.quiz.answers[0].answer_id === props.selectedAnswer?.answer_id? 'SELECTED': 'Select'}
                </button>
              </div>

              <div className= {`answer${props.quiz.answers[1].answer_id === props.selectedAnswer?.answer_id? ' selected': ''}`}>
              {props.quiz.answers[1].text}
                <button onClick = {()=>props.selectAnswer(props.quiz.answers[1])}>

                {props.quiz.answers[1].answer_id === props.selectedAnswer?.answer_id? 'SELECTED': 'Select'}
                  
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect((state)=>{
  console.log(state)
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  }
}, {fetchQuiz, selectAnswer})(Quiz)