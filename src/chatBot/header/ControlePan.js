import React from "react";
import Link from "../Link";

function ControlePan() {
  return (
    <React.Fragment>
      <Link link="#" name={<i className="fas fa-window-minimize"></i>} />
      <Link link="#" name={<i className="fas fa-expand-alt"></i>} />
      <Link link="#" name={<i className="fas fa-times"></i>} />
    </React.Fragment>
  );
}

export default ControlePan;
