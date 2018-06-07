import React from "react";
import "./Header.css";
import logo from "../../../images/logo.png";

import FaSearch from "react-icons/lib/fa/search";
import FaBellO from "react-icons/lib/fa/bell-o";
import FaCaretDown from "react-icons/lib/fa/caret-down";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header__info">
        <ul>
          <li>
            <FaSearch className="header__info-search" />
          </li>
          <li>
            <FaBellO className="header__info-notify" />
          </li>
          <li>
            <a href="/">Hoover</a>
            <FaCaretDown className="header__info-down" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
