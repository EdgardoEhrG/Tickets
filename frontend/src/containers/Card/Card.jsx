import React from "react";

import { connect } from "react-redux";
import { addModal } from "../../redux/actions/modal";

import Box from "./Box";
import CustomButton from "../../components/CustomButton/CustomButton";

import PropTypes from "prop-types";
import _ from "lodash";

import "./Card.scss";

const Card = (props) => {
  const { addModal, tickets } = props;

  const findByStatus = (value) => {
    return _.filter(tickets, ["status", value]).length;
  };

  const findByPriority = (value) => {
    return _.filter(tickets, ["priority", value]).length;
  };

  return (
    <div>
      <CustomButton
        type="submit"
        label="Add Ticket"
        className="btn btn-primary btn-add"
        handleClick={() => addModal(true)}
      />
      <div className="text-center mb-2">
        <div className="row">
          <Box
            title="Total tickets"
            cardValue={tickets.length}
            iconClass="fas fa-tag"
            type="total"
            status="all"
          />
          <Box
            title="Open tickets"
            cardValue={findByStatus("Open")}
            iconClass="fas fa-archive"
            cardClass="text-success"
            type="Open"
            status="status"
          />
          <Box
            title="Closed tickets"
            cardValue={findByStatus("Closed")}
            iconClass="fas fa-shield-alt"
            cardClass="text-muted"
            type="Closed"
            status="status"
          />
          <Box
            title="High Priority tickets"
            cardValue={findByPriority("High")}
            iconClass="fas fa-temperature-high"
            cardClass="text-danger"
            type="High"
            status="priority"
          />
          <Box
            title="Medium Priority tickets"
            cardValue={findByPriority("Medium")}
            iconClass="fas fa-folder-minus"
            cardClass="text-warning"
            type="Medium"
            status="priority"
          />
          <Box
            title="Low Priority tickets"
            cardValue={findByPriority("Low")}
            iconClass="fas fa-battery-quarter"
            cardClass="text-muted"
            type="Low"
            status="priority"
          />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  tickets: PropTypes.array.isRequired,
  addModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tickets: state.tickets.tickets,
});

export default connect(mapStateToProps, { addModal })(Card);
