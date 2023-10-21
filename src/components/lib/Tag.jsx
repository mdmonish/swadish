import React from "react";
import dash from "../../images/dash.png";

const Tag = ({ title, src }) => {
  return (
    <div className="tag">
      <img src={src || dash} alt="dash" /> {title}
    </div>
  );
};

export default Tag;
