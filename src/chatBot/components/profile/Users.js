import React from "react";
import Button from "./Button";

function Users(props) {
  let name = props.name;
  if (name.length >= 12) {
    name = name.slice(0, 12) + "...";
  }
  return (
    <div className="user-box">
      <i className="far fa-user"></i>
      <i className="fas fa-arrow-left"></i>
      <div className="user-box__name">{name}</div>
      <div className="user-box__country">
        <i className={props.icon}></i>
        <span>{props.country}</span>
      </div>
      <div className="user-box__country">
        <Button
          iconName="fas fa-phone-alt"
          type="btn btn-lg btn-primary"
          text="Voice Call"
        />
        <Button
          iconName="fas fa-video"
          type="btn btn-lg btn-primary"
          text="Video Call"
        />
        <Button
          iconName="fas fa-binoculars"
          type="btn btn-lg btn-light"
          text="Track"
        />
        <Button iconName="fas fa-ellipsis-h" type="btn btn-lg btn-light" />
      </div>
    </div>
  );
}

export default Users;
