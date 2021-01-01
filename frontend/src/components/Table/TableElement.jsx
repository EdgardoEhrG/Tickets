import React from "react";

import Entries from "./Entries";
import Table from "./Table";

const TableElement = () => {
  return (
    <div>
      <div className="row">
        <label style={labelOneStyle}>Show</label>
        <Entries />
        <label style={labelTwoStyle}>Entries</label>
        <Table />
      </div>
    </div>
  );
};

const labelOneStyle = {
  width: "auto",
  marginLeft: "15px",
  marginRight: "5px",
  color: "#8a929a",
};

const labelTwoStyle = {
  width: "auto",
  marginLeft: "5px",
  marginTop: "1px",
  color: "#8a929a",
};

export default TableElement;
