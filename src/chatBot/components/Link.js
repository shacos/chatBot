import React from "react";

function Link(props) {
  return (
    <React.Fragment>
      <a href={props.link}>{props.name}</a>
    </React.Fragment>
  );
}

export default Link;
