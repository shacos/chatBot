import React from "react";
import Link from "../Link";

function TypingArea() {
  return (
    <div className="chat-box__typingArea">
      <Link link="#" name={<i className="fas fa-laugh"></i>} />
      <input type="text" placeholder="Enter a message" />
      <Link link="#" name={<i className="fas fa-paperclip"></i>} />
      <Link link="#" name={<i className="fas fa-microphone"></i>} />
      <Link link="#" name={<i className="fas fa-users"></i>} />
      <Link link="#" name={<i className="fab fa-yelp"></i>} />
    </div>
  );
}

export default TypingArea;
