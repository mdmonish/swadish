import React from "react";

const options = [
  { value: "Select Role", label: "Select Role" },
  { value: "Developer", label: "Developer" },
  { value: "Technician", label: "Technician" },
];
const Select = ({ title }) => {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <span> {title}</span>
      <select className="field select_field">
        {options.map(opt => (
          <option>{opt.label}</option>
        ))}
      </select>
    </label>
  );
};

export default Select;
