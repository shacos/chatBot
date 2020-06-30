import React from "react";
import Users from "../components/profile/Users";
import Tabs from "../components/profile/Tabs";

function LeftSide() {
  return (
    <div className="flexBox-Left">
      <Users
        name="Ibrahim Koutabli"
        icon="fas fa-globe"
        country="London, England, United Kingdom"
      />
      <Tabs />
    </div>
  );
}

export default LeftSide;
