import React from "react";
import Message from "../components/chat/Message";
import TypingArea from "../components/chat/TypingArea";

function Chat() {
  const sender = true;
  return (
    <div>
      <Message text={["Sales", "Service", "Schedule Appointment"]} />
      <TypingArea />
    </div>
  );
}

export default Chat;
