import React from "react";

function Users(props) {
  return (
    <div>
      <i class="far fa-user"></i>
      <span>{props.name}</span>
      <span>{props.country}</span>
    </div>
  );
}

export default Users;
