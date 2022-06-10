import React from "react";
import "../styles/Header.css";
import ColorSelector from "./ColorSelector";

const Header = ({ colorSettings, changeColor }) => {
  return (
    <div className="header notPrinted">
      <h1 className="headingHeader">CVmaker</h1>
      <div className="color-view">
        <ColorSelector
          colorSettings={colorSettings.primary}
          changeColor={changeColor}
          primaryOrSecondary="primary"
        />
        <ColorSelector
          colorSettings={colorSettings.secondary}
          changeColor={changeColor}
          primaryOrSecondary="secondary"
        />
      </div>
      <div className="buttonDiv">
        <button onClick={() => window.print()}>Save</button>
      </div>
    </div>
  );
};

export default Header;
