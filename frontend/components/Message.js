import React from 'react'
import { SET_INFO_MESSAGE } from '../state/action-types'
import { setMessage } from '../state/action-creators'
import {connect} from 'react-redux'

 function Message(props) {
  return <div id="message">{props.message}</div>
}
export default connect((state)=>{
  return {
    message: state.infoMessage
  }
}) (Message)
