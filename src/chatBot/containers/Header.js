import React from "react";
import data from "../components/header/data";
import Link from "../components/Link";
// import CoBrowsing from "../../components/header/CoBrowsing";
// import ScreenShare from "../../components/header/ScreenShare";
// import Message from "../../components/header/Message";
// import UserAdd from "../../components/header/UserAdd";
import ControlePan from "../components/header/ControlePan";

const Header = () => {
  return (
    <div className="header">
      <Link
        link="#"
        name={
          <React.Fragment>
            <i className="fas fa-comment-alt"></i>
            Chat
          </React.Fragment>
        }
      />
      <input type="text" placeholder="Search for messages..." />
      {data.map((el, index) => {
        return (
          <Link
            key={index}
            link="#"
            name={
              <React.Fragment>
                <i className={el.icon}></i>
                {el.name && el.name}
              </React.Fragment>
            }
          />
        );
      })}
      {/* <CoBrowsing />
      <ScreenShare />
      <Message />
      <UserAdd /> */}
      <ControlePan />
    </div>
  );
};

export default Header;
