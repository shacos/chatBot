import React from "react";

function Button(props) {
  return (
    <span className="user-box__button">
      <button type="button" className={props.type}>
        <i className={props.iconName}></i>
        {props.text}
      </button>
    </span>
  );
}

export default Button;
