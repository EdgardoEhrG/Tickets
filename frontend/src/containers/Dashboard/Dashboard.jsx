import React, { useEffect } from "react";

import { connect } from "react-redux";
import { allTickets, updateTableEntries } from "../../redux/actions/ticket";
import { getUser } from "../../redux/actions/user";

import Card from "../../containers/Card/Card";
import TableElement from "../../components/Table/TableElement";
import AddTicket from "../../components/Ticket/AddTicket";

import PropTypes from "prop-types";
import socketIOClient from "socket.io-client";

import { authToken } from "../../helpers";

import "./Dashboard.scss";

const Dashboard = (props) => {
  const { token, allTickets, updateTableEntries, entries, getUser } = props;

  const API_ENDPOINT = "http://localhost:5000";
  const socket = socketIOClient(API_ENDPOINT);

  useEffect(() => {
    const dashboardMethods = () => {
      authToken(token);
      allTickets();
      updateTableEntries(entries);
      getUser();
    };
    dashboardMethods();
    socket.on("refreshPage", () => {
      dashboardMethods();
    });
  }, [token, socket, updateTableEntries, allTickets, entries, getUser]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card-box">
            <Card />
            <TableElement />
            <AddTicket />
          </div>
        </div>
      </div>
    </>
  );
};

Dashboard.propTypes = {
  token: PropTypes.string,
  allTickets: PropTypes.func.isRequired,
  updateTableEntries: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  entries: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  entries: state.tickets.entries,
});

export default connect(mapStateToProps, {
  allTickets,
  updateTableEntries,
  getUser,
})(Dashboard);
