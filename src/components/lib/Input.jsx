import React from "react";

const Input = ({ title, placeholder }) => {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <span>{title}</span>
      <input placeholder={placeholder} className="field input_field" />
    </label>
  );
};

export default Input;
