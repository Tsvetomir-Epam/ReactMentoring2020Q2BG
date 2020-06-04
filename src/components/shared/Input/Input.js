import React from "react";
import "./Input.scss";

function Input(props) {
  return (
    <div className="Input">
      <input type={props.type} value={props.value} onChange={props.onChange} />
    </div>
  );
}

export default Input;
