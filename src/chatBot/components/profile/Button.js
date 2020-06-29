import React from "react";
import Link from "../Link";

function Button(props) {
  return (
    <React.Fragment>
      <i className={props.iconName}></i>
      <Link link={props.link} name={props.text} />
    </React.Fragment>
  );
}

export default Button;
