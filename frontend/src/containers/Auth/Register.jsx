import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { createUser } from "../../redux/actions/auth";

import CustomInput from "../../components/CustomInput/CustomInput";
import RadioInput from "../../components/RadioInput/RadioInput";
import CustomButton from "../../components/CustomButton/CustomButton";

import PropTypes from "prop-types";
import { validateInput } from "../../helpers";

import "./Auth.scss";

const Register = (props) => {
  const { createUser, isAuthenticated, history, error } = props;
  const [user, setUser] = useState({
    data: {
      username: "",
      password: "",
      role: "",
    },
  });

  const [errorInfo, setError] = useState({
    usernameError: "",
    passwordError: "",
    roleError: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
  }, [isAuthenticated, history]);

  const { username, password } = user.data;
  const { usernameError, passwordError, roleError } = errorInfo;

  const onRegisterUser = (e) => {
    e.preventDefault();
    const isValid = validateInput(user.data, setError);
    if (isValid) {
      createUser(user.data);
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

        {error ? <p className="error-feedback">{error}</p> : ""}
      </div>
    </div>
  );
};

Register.propTypes = {
  createUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { createUser })(Register);
