import React from "react";

const Actions = ({ setRoute, route }) => {
  return (
    <div className="user_actions">
      <div>
        <h1 className="name">User</h1>
        <span className={`view ${route !== "" ? "" : "text_style"}`}>
          View User{" "}
        </span>
        {route !== "" && (
          <span className="view">
            &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;
            <span className="text_style">{route}</span>
          </span>
        )}
      </div>
      <div className="btn_group">
        <button className="btn yellow_bg" onClick={() => setRoute("Add User")}>
          Add User
        </button>
        <button className="btn yellow_bg" onClick={() => setRoute("Add Team")}>
          Add Team
        </button>
        <button className="btn grey_bg" onClick={() => setRoute("")}>
          View User
        </button>
      </div>
    </div>
  );
};

export default Actions;
