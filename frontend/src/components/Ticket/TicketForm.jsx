import React, { useState } from "react";

import { connect } from "react-redux";
import { addModal, editModal } from "../../redux/actions/modal";
import { selectedTicket } from "../../redux/actions/ticket";

import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import DropDown from "../DropDown/DropDown";

import { departmentsArray, prioritiesArray } from "../../helpers";
import { addNewTicket, editTicket } from "../../services/ticket";

import socketIOClient from "socket.io-client";

const TicketForm = (props) => {
  const { addModal, editModal, selectedTicket } = props;

  const API_ENDPOINT = "http://localhost:5000";
  const socket = socketIOClient(API_ENDPOINT);

  const departments = departmentsArray();
  const priorities = prioritiesArray();

  const [department, setDepartment] = useState("Select department");
  const [priority, setPriority] = useState("Select priority");
  const [ticket, setTicket] = useState({
    data: {
      fullname: "",
      email: "",
      subject: "",
      description: "",
      department: "",
      priority: "",
    },
  });

  const { fullname, email, subject, description } = ticket.data;

  const onAddTicket = async (e) => {
    e.preventDefault();
    const { data } = ticket;
    data.priority = priority;
    data.department = department;
    await addNewTicket(data);
    socket.emit("refresh", {});
    clearFields();
  };

  const onEditTicket = async (e) => {
    e.preventDefault();
    const { data } = ticket;
    data.priority = priority;
    data.department = department;
    await editTicket(selectedTicket._id, data);
    socket.emit("refresh", {});
  };

  const getDropdownValue = (item) => {
    if (item.key === "departments") {
      setDepartment(item.title);
    } else {
      setPriority(item.title);
    }
  };

  const clearFields = () => {
    setTicket({
      data: {
        fullname: "",
        email: "",
        subject: "",
        description: "",
        department: "",
        priority: "",
      },
    });
    setDepartment("Select department");
    setPriority("Select priority");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    const { data } = ticket;

    setTicket({
      data: {
        ...data,
        [name]: value,
      },
    });
  };

  return (
    <>
      <form onSubmit={onAddTicket}>
        <div className="form-group">
          <CustomInput
            type="text"
            name="fullname"
            label="Fullname"
            className="form-control"
            placeholder="Enter name"
            value={fullname}
            error=""
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <CustomInput
            type="text"
            name="email"
            label="Email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            error=""
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <DropDown
            title={department}
            label="Departments"
            list={departments}
            getDropdownValue={getDropdownValue}
          />
        </div>
        <div className="form-group">
          <DropDown
            title={priority}
            label="Priority"
            list={priorities}
            getDropdownValue={getDropdownValue}
          />
        </div>
        <div className="form-group">
          <CustomInput
            type="text"
            name="subject"
            label="Subject"
            className="form-control"
            placeholder="Enter subject"
            value={subject}
            error=""
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            cols="40"
            rows="5"
            className="form-control"
            value={description}
            onChange={onChange}
          ></textarea>
        </div>
        <CustomButton
          className="btn btn-primary"
          label="ADD"
          disabled={
            !fullname ||
            !email ||
            !subject ||
            !description ||
            !department ||
            !priority
          }
        />
        &nbsp;
        <CustomButton
          className="btn btn-danger"
          label="CANCEL"
          handleClick={() => addModal(false)}
        />
      </form>
    </>
  );
};

export default connect(null, { addModal })(TicketForm);
