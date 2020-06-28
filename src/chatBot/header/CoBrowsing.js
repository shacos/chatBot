import React from "react";
import Link from "../Link";

function CoBrowsing() {
  return (
    <React.Fragment>
      <Link
        link="#"
        name={
          <React.Fragment>
            <i className="fas fa-laptop"></i>
            Co-Browsing
          </React.Fragment>
        }
      />
    </React.Fragment>
  );
}

export default CoBrowsing;
