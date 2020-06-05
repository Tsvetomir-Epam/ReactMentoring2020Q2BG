import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

function Button(props) {
  return (
    <div className="Button">
      <div
        className={props.transperant ? "transperant" : "filled"}
        onClick={props.onClick}
      >
        {props.text}
      </div>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
