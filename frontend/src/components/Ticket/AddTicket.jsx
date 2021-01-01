import React, { useState } from "react";

import Modal from "../Modal/Modal";
import TicketForm from "./TicketForm";

const AddTicket = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(false);
  };

  const dismiss = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal
        header="Add new ticket"
        visible={visible}
        dismiss={dismiss}
        children={TicketForm}
      />
    </>
  );
};

export default AddTicket;
