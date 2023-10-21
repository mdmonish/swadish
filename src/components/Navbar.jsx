import React from "react";
import logofull from "../images/logofull.png";
import notification from "../images/notification.png";
import setting from "../images/setting.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logofull} alt="logofull" />
      <div className="nav_icons">
        <img src={notification} alt="notification" width={25} height={25} />
        <img src={setting} alt="setting" width={40} height={40} />
      </div>
    </nav>
  );
};

export default Navbar;
