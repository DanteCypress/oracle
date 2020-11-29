import React from "react";
import robinhood from "../image/robinhood.svg";
import "../Css/Header.css";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        {/* logo */}
        <img src={robinhood} alt="robinhood logo" width={25} />
      </div>
      <div className="header__search">
        {/* search */}
        <div className="header__searchContainer">
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__menuItems">
        <a href="#">Free Stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
}

export default Header;
