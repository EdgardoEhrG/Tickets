import React, { useState } from "react";

import "./DropDown.scss";

const DropDown = (props) => {
  const { title, list, label, getDropdownValue } = props;

  let [listOpen, setListOpen] = useState(false);

  const toggleList = () => {
    listOpen = !listOpen;
    setListOpen(listOpen);
  };

  const selectItem = (item) => {
    getDropdownValue(item);
    listOpen = !listOpen;
    setListOpen(listOpen);
  };

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <div className="dd-header" onClick={toggleList}>
        <div className="dd-header-title">{title}</div>
        {listOpen ? (
          <i className="fas fa-angle-up"></i>
        ) : (
          <i className="fas fa-angle-down"></i>
        )}
        {listOpen && (
          <ul className="dd-list">
            {list.map((item) => (
              <li
                className="dd-list-item"
                key={item.id}
                onClick={selectItem(item)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default DropDown;
