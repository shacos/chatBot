import React from "react";
import Link from "../Link";

function ChatLink() {
  return (
    <React.Fragment>
      <Link
        link="#"
        name={
          <React.Fragment>
            <i className="fas fa-comment-alt"></i>
            Chat
          </React.Fragment>
        }
      />
    </React.Fragment>
  );
}

export default ChatLink;
