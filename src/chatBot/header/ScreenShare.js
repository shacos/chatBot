import React from "react";
import Link from "../Link";

function ScreenShare() {
  return (
    <React.Fragment>
      <Link
        link="#"
        name={
          <React.Fragment>
            <i className="fas fa-share"></i>
            Screen Share
          </React.Fragment>
        }
      />
    </React.Fragment>
  );
}

export default ScreenShare;
