import React from "react";
import "./Button.scss";

function Button(props) {
  return (
    <div className="Button">
      <div className={props.transperant ? "transperant" : "filled"} onClick={props.onClick}>
        {props.text}
      </div>
    </div>
  );
}

export default Button;
