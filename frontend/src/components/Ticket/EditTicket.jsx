import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { editModal } from "../../redux/actions/modal";

import Modal from "../Modal/Modal";
import TicketForm from "./TicketForm";

const EditTicket = (props) => {
  const { edit, editModal } = props;

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(edit);
  }, [setVisible, edit]);

  const dismiss = () => {
    editModal(false);
  };

  return (
    <>
      <Modal header="Edit ticket" visible={visible} dismiss={dismiss}>
        <TicketForm />
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  edit: state.modal.edit,
});

export default connect(mapStateToProps, { editModal })(EditTicket);
