import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { addModal } from "../../redux/actions/modal";

import Modal from "../Modal/Modal";
import TicketForm from "./TicketForm";

const AddTicket = (props) => {
  const { add, addModal } = props;

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(add);
  }, [setVisible, add]);

  const dismiss = () => {
    addModal(false);
  };

  return (
    <>
      <Modal header="Add new ticket" visible={visible} dismiss={dismiss}>
        <TicketForm />
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  add: state.modal.add,
});

export default connect(mapStateToProps, { addModal })(AddTicket);
