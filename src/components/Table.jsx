import React, { useState } from "react";
import dots from "../images/dots.png";
import Popup from "./lib/Popup";

const data = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
];
const Table = () => {
  const [popUp, setPopUp] = useState(null);

  return (
    <table>
      <thead>
        <tr>
          <th>Checkbox</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>
              <input type="checkbox" />
              {item.id}
            </td>
            <td>Date 1</td>
            <td>Date 2</td>
            <td>Data 3</td>
            <td>Data 4</td>
            <td style={{ position: "relative" }}>
              <img
                src={dots}
                alt="dots"
                onClick={() => setPopUp(item.id)}
                className="dots"
              />
              {popUp === item.id && <Popup />}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
