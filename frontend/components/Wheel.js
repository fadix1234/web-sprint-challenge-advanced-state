import React from "react";
import { connect } from "react-redux";
import { moveClockwise, moveCounterClockwise } from "../state/action-creators";

//export default function Wheel(props) {

  const Counter = (props) => {
   const { wheel, moveClockwise, moveCounterClockwise } = props;
   console.log(props);
  return (
    <div id="wrapper">
      <div id="wheel">
        {
          [...Array(6).keys()].map(key => {
            return (
              <div className={`cog${wheel === key ? ' active' : ''}`} key={key} style={{ "--i": key }}>
                {wheel === key ? 'B' : null}
              </div>
            )
          })
        }{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={moveCounterClockwise} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={moveClockwise}>Clockwise</button>
      </div>
    </div>
  )
}
//}
const mapStateToProps = (state) => {
  return { wheel: state.wheel };
};
export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise})(Counter);
