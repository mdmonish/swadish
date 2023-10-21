import React from "react";
import user from "../images/user.png";
import leeds from "../images/leeds.png";
import Tag from "./lib/Tag";

const Header = () => {
  return (
    <header className="header">
      <div className="header_group">
        <h1 className="name">
          Sanjeev Kumar <span>Super Admin</span>
        </h1>
        <span className="email">sanjeevkumar@gmail.com</span>
      </div>
      <div className="group_actions">
        <Tag title="Dashboard" />
        <Tag title="Meetings" />
        <Tag title="Bookings" src={leeds} />
        <Tag title="Bookings" />
        <button className="btn_icon">
          <img src={user} alt="user" />{" "}
          <span style={{ marginLeft: 8 }}>User</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
