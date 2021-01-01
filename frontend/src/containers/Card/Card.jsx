import React, { useState } from "react";

import Box from "./Box";
import CustomButton from "../../components/CustomButton/CustomButton";
import Modal from "../../components/Modal/Modal";

import PropTypes from "prop-types";

import "./Card.scss";

const Card = (props) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(false);
  };

  const dismiss = () => {
    setVisible(false);
  };

  return (
    <div>
      <CustomButton
        type="submit"
        label="Add Ticket"
        className="btn btn-primary btn-add"
        handleClick={showModal}
      />
      <Modal header="Add new ticket" visible={visible} dismiss={dismiss} />
      <div className="text-center mb-2">
        <div className="row">
          <Box title="Total tickets" cardValue="100" iconClass="fas fa-tag" />
          <Box
            title="Open tickets"
            cardValue="40"
            iconClass="fas fa-archive"
            cardClass="text-success"
          />
          <Box
            title="Closed tickets"
            cardValue="20"
            iconClass="fas fa-shield-alt"
            cardClass="text-muted"
          />
          <Box
            title="High Priority tickets"
            cardValue="20"
            iconClass="fas fa-temperature-high"
            cardClass="text-danger"
          />
          <Box
            title="Medium Priority tickets"
            cardValue="10"
            iconClass="fas fa-folder-minus"
            cardClass="text-warning"
          />
          <Box
            title="Low Priority tickets"
            cardValue="5"
            iconClass="fas fa-battery-quarter"
            cardClass="text-muted"
          />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
