import React from "react";

import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import DropDown from "../DropDown/DropDown";

const LIST = [
  { id: 0, title: "IT" },
  { id: 1, title: "Marketing" },
  { id: 2, title: "Sales" },
  { id: 3, title: "Finance" },
];

const TicketForm = () => {
  const onChange = () => {};
  return (
    <>
      <form>
        <div className="form-group">
          <CustomInput
            type="text"
            name="fullname"
            label="Fullname"
            className="form-control"
            placeholder="Enter name"
            value=""
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
            value=""
            error=""
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <DropDown title="Finance" label="Departments" list={LIST} />
        </div>
        <div className="form-group">
          <DropDown title="High" label="Priority" />
        </div>
        <div className="form-group">
          <CustomInput
            type="text"
            name="subject"
            label="Subject"
            className="form-control"
            placeholder="Enter subject"
            value=""
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
            value=""
            onChange={onChange}
          ></textarea>
        </div>
        <CustomButton className="btn btn-primary" label="ADD" />
        &nbsp;
        <CustomButton className="btn btn-danger" label="CANCEL" />
      </form>
    </>
  );
};

export default TicketForm;
