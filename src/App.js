import React from "react";
import Header from "./chatBot/header/Header";
import Chat from "./chatBot/chatting/Chat";
import Profile from "./chatBot/profile/Profile";

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Chat />
    </div>
  );
}

export default App;
