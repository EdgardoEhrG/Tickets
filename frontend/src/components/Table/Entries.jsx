import React from "react";

const Entries = () => {
  const onChange = () => {};

  return (
    <div className="form-group">
      <select
        name="entries"
        className="form-control form-control-sm"
        value=""
        onChange={onChange}
        style={selectTagStyle}
      >
        <option value="5">5</option>
        <option value="7">7</option>
        <option value="10">10</option>
        <option value="All">All</option>
      </select>
    </div>
  );
};

const selectTagStyle = {
  width: "100px",
  heigth: "auto",
  color: "white",
  border: "none",
  backgroundColor: "#8a929a",
};

export default Entries;
