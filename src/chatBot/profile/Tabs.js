import React from "react";
import Link from "../Link";
import ProfileTab from "./ProfileTab";

function Tabs() {
  return (
    <div>
      <button className="tablinks" onclick={<ProfileTab />}>
        Profile
      </button>
      <Link link="#" name="Browser & Software" />
      <Link link="#" name="Notes" />
    </div>
  );
}

export default Tabs;
