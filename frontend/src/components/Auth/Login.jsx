import React, { useState } from "react";
import { Link } from "react-router-dom";

import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

import { validateInput } from "../../helpers";

import "./Auth.scss";

const Login = () => {
  const [user, setUser] = useState({
    data: {
      username: "",
      password: "",
    },
  });

  const [error, setError] = useState({
    usernameError: "",
    passwordError: "",
  });

  const onLoginUser = (e) => {
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

  const { username, password } = user.data;
  const { usernameError, passwordError } = error;

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={onLoginUser}>
          <h3>Sign In</h3>
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
          <CustomButton
            type="submit"
            label="Sign In"
            className="btn btn-primary btn-block"
          />
          <p className="forgot-password text-right">
            Not yet registered? <Link to="/sign-up">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
