import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { updateTableEntries } from "../../redux/actions/ticket";

import PropTypes from "prop-types";

const Entries = (props) => {
  const { updateTableEntries, entries, tickets } = props;

  const [tableEntries, setTableEntries] = useState();

  useEffect(() => {
    setTableEntries(entries);
  }, [entries, setTableEntries]);

  const onSelectedTag = (e) => {
    updateTableEntries(parseInt(e.target.value, 10));
  };

  return (
    <div className="form-group">
      <select
        name="entries"
        className="form-control form-control-sm"
        value={tableEntries}
        onChange={onSelectedTag}
        style={selectTagStyle}
      >
        <option value="5">5</option>
        <option value="7">7</option>
        <option value="10">10</option>
        <option value={tickets.length}>All</option>
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

Entries.propTypes = {
  updateTableEntries: PropTypes.func.isRequired,
  entries: PropTypes.any.isRequired,
  tickets: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  entries: state.tickets.entries,
  tickets: state.tickets.tickets,
});

export default connect(mapStateToProps, { updateTableEntries })(Entries);
