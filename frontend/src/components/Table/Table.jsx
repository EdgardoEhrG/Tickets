import React from "react";

import PropTypes from "prop-types";

import "./Table.scss";

const TABLE_HEAD = [
  "ID",
  "Fullname",
  "Subject",
  "Priority",
  "Status",
  "Created",
  "Completed",
  "Action",
];

const Table = () => {
  return (
    <div className="col-sm-12 table-responsive">
      <table className="table table-centered mb-0" id="ticketTable">
        <thead className="font-14 bg-light">
          <tr>
            {TABLE_HEAD.map((tablehead, i) => {
              <th key={i} className="font-weight-medium">
                {tablehead} &nbsp;&nbsp;
                <i className="fas fa-angle-up icon"></i>
              </th>;
            })}
          </tr>
        </thead>
        <tbody className="font-14"></tbody>
      </table>
    </div>
  );
};

export default Table;
