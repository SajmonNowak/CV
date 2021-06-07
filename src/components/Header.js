import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header notPrinted">
      <h1 className="heading">CVmaker</h1>
      <div className="buttonDiv">
        <button onClick={() => window.print()}>Save</button>
      </div>
    </div>
  );
};

export default Header;
