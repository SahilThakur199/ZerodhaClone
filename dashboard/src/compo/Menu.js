import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";

const Menu = () => {
  const [showProfile, setShowProfile] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const handleProfileClick = (index) => {
    setShowProfile(index);
  };
  const handleMenuToggle = (index) => {
    setShowMenu(!showMenu);
  };

  const MenuClass = "menu";
  const activeMenuClass = "active-menu";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/" onClick={() => handleProfileClick(0)}>
              <p className={showProfile === 0 ? activeMenuClass : MenuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/Orders" onClick={() => handleProfileClick(1)}>
              <p className={showProfile === 1 ? activeMenuClass : MenuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/Holdings" onClick={() => handleProfileClick(2)}>
              <p className={showProfile === 2 ? activeMenuClass : MenuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/Positions" onClick={() => handleProfileClick(3)}>
              <p className={showProfile === 3 ? activeMenuClass : MenuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/Funds" onClick={() => handleProfileClick(4)}>
              <p className={showProfile === 4 ? activeMenuClass : MenuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/Apps" onClick={() => handleProfileClick(5)}>
              <p className={showProfile === 5 ? activeMenuClass : MenuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;