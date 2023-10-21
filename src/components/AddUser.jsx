import React from "react";
import Input from "./lib/Input";
import Select from "./lib/Select";
import FormContainer from "./lib/FormContainer";

const AddUser = () => {
  return (
    <FormContainer>
      <div className="user_inputs">
        <Input title="Name" placeholder="Name" />
        <Input title="Email Address" placeholder="Email Address" />
        <Select title="Role" />
      </div>
      <button className="create_btn">Create User</button>
    </FormContainer>
  );
};

export default AddUser;
