import React from "react";

import CustomInput from "../CustomInput/CustomInput";

import "./Auth.scss";

const Register = () => {
  const onChange = () => {};

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign Up</h3>
          <div className="form-group">
            <CustomInput
              className="form-control"
              type="text"
              name="username"
              label="Username"
              placeholder="Enter your name"
              value=""
              error="User not found"
              onChange={onChange}
            />
            <CustomInput
              className="form-control"
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              value=""
              error="Incorrect password"
              onChange={onChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
