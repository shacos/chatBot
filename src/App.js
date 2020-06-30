import React from "react";
import "./App.css";
import RightSide from "./chatBot/containers/RightSide";
import LeftSide from "./chatBot/containers/LeftSide";

function App() {
  return (
    <div className="flexBox-container">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
