import React from "react";

function Message(props) {
  return (
    <React.Fragment>
      <i className="far fa-user"></i>
      <span>
        {props.text.map((el, index) => (
          <p key={index}>{el}</p>
        ))}
      </span>
    </React.Fragment>
  );
}

export default Message;
