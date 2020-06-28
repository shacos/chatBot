import React from "react";
import Chat from "./Chat";
import CoBrowsing from "./CoBrowsing";
import ScreenShare from "./ScreenShare";
import Message from "./Message";
import UserAdd from "./UserAdd";
import ControlePan from "./ControlePan";

const Header = () => {
  return (
    <React.Fragment>
      <Chat />
      <input type="text" placeholder="Search for messages..." />
      <CoBrowsing />
      <ScreenShare />
      <Message />
      <UserAdd />
      <ControlePan />
    </React.Fragment>
  );
};

export default Header;
