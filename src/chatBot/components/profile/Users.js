import React from "react";
import Button from "./Button";

function Users(props) {
  return (
    <div>
      <i className="far fa-user"></i>
      <div>{props.name}</div>
      <div>{props.country}</div>
      <Button iconName="fas fa-phone-alt" link="#" text="Voice Call" />
      <Button iconName="fas fa-video" link="#" text="Video Call" />
      <Button iconName="fas fa-binoculars" link="#" text="Track" />
      <Button iconName="fas fa-ellipsis-h" link="#" />
    </div>
  );
}

export default Users;