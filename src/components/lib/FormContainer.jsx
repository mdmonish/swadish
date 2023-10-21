import React from "react";

const FormContainer = ({ children }) => {
  return (
    <div className="add_user">
      <h1 className="user_info">User Information</h1>
      {children}
    </div>
  );
};

export default FormContainer;
