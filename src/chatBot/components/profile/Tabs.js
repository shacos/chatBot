import React, { useState } from "react";
import Link from "../Link";
import ProfileTab from "./ProfileTab";

function Tabs() {
  const [state, setState] = useState(true);
  return (
    <div className="tab-box">
      <div className="tab-box__links">
        <Link link="#" name="Profile" onClick={() => setState(true)} />
        <Link link="#" name="Browser & Software" />
        <Link link="#" name="Notes" />
      </div>
      <div className="tab-box__content">{state && <ProfileTab />}</div>
    </div>
  );
}

export default Tabs;
