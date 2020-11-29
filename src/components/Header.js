import React from "react";
import robinhood from "../image/robinhood.svg";
import "../App.css";

function Header() {
  return (
    <div>
      <div className="header__logo">
        {/* logo */}
        <img src={robinhood} alt="robinhood logo" />
      </div>
      <div className="header__search">{/* search */}</div>
      <div className="header__menuItems">{/* menu items */}</div>
      <h3>Header</h3>
    </div>
  );
}

export default Header;
