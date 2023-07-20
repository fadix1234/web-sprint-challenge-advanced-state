import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { postQuiz, inputChange } from '../state/action-creators'
import { useEffect } from 'react'


 function Form(props) {
  const { postQuiz, inputChange, form } = props
 
   
  
   
  const onChange = evt => {
    const {id, value } = evt.target
    inputChange({inputID: id, value: value})

  }

  const onSubmit = evt => {
    evt.preventDefault();
    postQuiz()

    


  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button 
      onClick ={onSubmit}
      id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
