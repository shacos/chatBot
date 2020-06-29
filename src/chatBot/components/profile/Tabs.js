import React, { useState } from "react";
import Link from "../Link";
import ProfileTab from "./ProfileTab";

function Tabs() {
  const [state, setState] = useState(true);
  return (
    <div>
      <Link link="#" name="Profile" onClick={() => setState(true)} />
      <Link link="#" name="Browser & Software" />
      <Link link="#" name="Notes" />
      {state && <ProfileTab />}
    </div>
  );
}

export default Tabs;
