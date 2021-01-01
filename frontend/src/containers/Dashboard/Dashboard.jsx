import React from "react";

import Card from "../../containers/Card/Card";
import TableElement from "../../components/Table/TableElement";
import AddTicket from "../../components/Ticket/AddTicket";

import "./Dashboard.scss";

const Dashboard = () => {
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

export default Dashboard;
