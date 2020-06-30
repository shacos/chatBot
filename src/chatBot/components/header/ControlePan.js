import React from "react";
import Link from "../Link";

function ControlePan() {
  return (
    <span>
      <Link link="#" name={<i className="fas fa-window-minimize"></i>} />
      <Link link="#" name={<i className="fas fa-expand-alt"></i>} />
      <Link link="#" name={<i className="fas fa-times"></i>} />
    </span>
  );
}

export default ControlePan;
