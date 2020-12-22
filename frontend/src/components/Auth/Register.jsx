import React, { useState } from "react";
import { Link } from "react-router-dom";

import CustomInput from "../CustomInput/CustomInput";
import RadioInput from "../RadioInput/RadioInput";
import CustomButton from "../CustomButton/CustomButton";

import { validateInput } from "../../helpers";

import "./Auth.scss";

const Register = () => {
  const [user, setUser] = useState({
    data: {
      username: "",
      password: "",
      role: "",
    },
  });

  const [error, setError] = useState({
    data: {
      usernameError: "",
      passwordError: "",
      roleError: "",
    },
  });

  const { username, password } = user.data;
  const { usernameError, passwordError, roleError } = error.data;

  const onRegisterUser = (e) => {
    e.preventDefault();
    const isValid = validateInput(user.data, setError);
    if (isValid) {
      console.log(user.data);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    const { data } = user;

    setUser({
      data: {
        ...data,
        [name]: value,
      },
    });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={onRegisterUser}>
          <h3>Sign Up</h3>
          <div className="form-group">
            <CustomInput
              className="form-control"
              type="text"
              name="username"
              label="Username"
              placeholder="Enter your name"
              value={username}
              error={usernameError}
              onChange={onChange}
            />
            <CustomInput
              className="form-control"
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              error={passwordError}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <br />
            <div className="form-check form-check-inline">
              <RadioInput
                id="inlineRadio1"
                className="form-check-input"
                labelClassName="form-check-label"
                name="role"
                label="User"
                value="User"
                onChange={onChange}
                error={roleError}
              />
            </div>
            <div className="form-check form-check-inline">
              <RadioInput
                id="inlineRadio2"
                className="form-check-input"
                labelClassName="form-check-label"
                name="role"
                label="Admin"
                value="Admin"
                onChange={onChange}
                error={roleError}
              />
            </div>
            <CustomButton
              type="submit"
              label="Sign Up"
              className="btn btn-primary btn-block"
            />
            <p className="forgot-password text-right">
              Already registered? <Link to="/sign-in">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
