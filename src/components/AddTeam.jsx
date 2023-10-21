import React from "react";
import Select from "./lib/Select";
import FormContainer from "./lib/FormContainer";
import Input from "./lib/Input";

const AddTeam = () => {
  return (
    <FormContainer>
      <div className="grid_container">
        <Input title="Team Name" placeholder="Name" />
        <Select title="Sr. Manager" />
        <Select title="Team Manager" />
        <Select title="Team Lead" />
        <Select title="Agent Manager" />
      </div>
      <button className="create_btn">Create Team</button>
    </FormContainer>
  );
};

export default AddTeam;
