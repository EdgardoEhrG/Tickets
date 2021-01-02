import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { connect } from "react-redux";
import { deleteTicket, closeTicket } from "../../services/ticket";

import PropTypes from "prop-types";
import moment from "moment";
import socketIOClient from "socket.io-client";
import _ from "lodash";

import Entries from "./Entries";

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

const FilteredTable = (props) => {
  const { tickets, entries, user } = props;

  const API_ENDPOINT = "http://localhost:5000";
  const socket = socketIOClient(API_ENDPOINT);

  const [tableTickets, setTableTickets] = useState(tickets);
  const [title, setTitle] = useState("");

  const history = useHistory();
  const { type, status } = useParams();

  const filteredTickets = (type) => {
    if (status === "all") {
      const tableEntries = tickets.slice(0, parseInt(entries, 10));
      setTableTickets(tableEntries);
      setTitle("All tickets");
    } else if (status === "priority") {
      const res = _.filter(tickets, ["priority", type]);
      const tableEntries = res.slice(0, parseInt(entries, 10));
      setTableTickets(tableEntries);
      setTitle(`${type} Priority Tickets`);
    } else {
      const res = _.filter(tickets, ["status", type]);
      const tableEntries = res.slice(0, parseInt(entries, 10));
      setTableTickets(tableEntries);
      setTitle(`${status} Tickets`);
    }
  };

  useEffect(() => {
    filteredTickets(type);
  }, [type, entries]);

  const deleteUserTicket = (id) => {
    deleteTicket(id);
    socket.emit("refresh", {});
  };

  const closeUserTicket = (id) => {
    closeTicket(id);
    socket.emit("refresh", {});
  };

  const goBackToDashboard = () => {
    history.push("dashboard");
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-3">
          <div onClick={goBackToDashboard}>
            <i className="fas fa-arrow-left back"></i>
          </div>
          <Entries />
          <div className="col-sm-5">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
      <div className="col-sm-12 table-responsive">
        <table className="table table-centered mb-0" id="ticketTable">
          <thead className="font-14 bg-light">
            <tr>
              {TABLE_HEAD.map((tablehead, i) => (
                <th key={i} className="font-weight-medium">
                  {tablehead} &nbsp;&nbsp;
                  <i className="fas fa-angle-up icon"></i>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-14">
            {tableTickets.map((ticket) => {
              return (
                <tr key={ticket._id}>
                  <td>#{ticket._id}</td>
                  <td>{ticket.fullname}</td>
                  <td>{ticket.subject}</td>
                  <td>
                    {ticket.priority === "High" ? (
                      <span className="badge badge-danger">
                        {ticket.priority}
                      </span>
                    ) : ticket.priority === "Medium" ? (
                      <span className="badge badge-warning">
                        {ticket.priority}
                      </span>
                    ) : ticket.priority === "Low" ? (
                      <span className="badge badge-success">
                        {ticket.priority}
                      </span>
                    ) : (
                      ""
                    )}
                  </td>
                  <td>
                    {ticket.status === "Open" ? (
                      <span className="badge badge-success"></span>
                    ) : ticket.status === "Closed" ? (
                      <span className="badge badge-secondary"></span>
                    ) : (
                      ""
                    )}
                  </td>
                  <td>{moment(ticket.created).format("DD/MM/YYYY")}</td>
                  <td>{moment(ticket.dueDate).format("DD/MM/YYYY")}</td>
                  <td
                    className={
                      user._id === ticket.user
                        ? "actions actions-bg"
                        : "actions"
                    }
                  >
                    {user && user._id === ticket.user ? (
                      <>
                        <a
                          href="#!"
                          className="btn text-white btn-sm"
                          onClick={deleteUserTicket(ticket._id)}
                        >
                          <i className="fas fa-trash"></i>
                        </a>
                        <a
                          href="#!"
                          className={
                            ticket.status === "Closed"
                              ? "btn text-white btn-sm disabled"
                              : "btn text-white btn-sm"
                          }
                          onClick={closeUserTicket(ticket._id)}
                        >
                          <i className="fas fa-check"></i>
                        </a>
                      </>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

FilteredTable.propTypes = {
  tickets: PropTypes.array.isRequired,
  entries: PropTypes.any.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  tickets: state.tickets.tickets,
  entries: state.tickets.entries,
  user: state.user,
});

export default connect(mapStateToProps, {})(FilteredTable);
