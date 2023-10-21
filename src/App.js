import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AddUser from "./components/AddUser";
import Table from "./components/Table";
import Actions from "./components/Actions";
import TableAction from "./components/TableAction";
import Pagination from "./components/Pagination";
import AddTeam from "./components/AddTeam";
import { useState } from "react";

function App() {
  const [route, setRoute] = useState("");
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Actions route={route} setRoute={setRoute} />
      {route === "" && (
        <div className="table_group">
          <TableAction />
          <Table />
          <Pagination />
        </div>
      )}
      {route === "Add User" && <AddUser />}
      {route === "Add Team" && <AddTeam />}
    </div>
  );
}

export default App;
