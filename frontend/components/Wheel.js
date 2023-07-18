import React from "react";
import { connect } from "react-redux";
import { moveClockwise, moveCounterClockwise } from "../state/action-creators";

//export default function Wheel(props) {

  const Counter = (props) => {
   const { count, moveClockwise, moveCounterClockwise } = props;

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
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
  return { count: state };
};
export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise})(Counter);
