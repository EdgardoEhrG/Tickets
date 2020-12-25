import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

import { loginUser } from "../../redux/actions/auth";
import { validateInput } from "../../helpers";

import "./Auth.scss";

const Login = (props) => {
  const { loginUser, isAuthenticated, history, error } = props;

  const [user, setUser] = useState({
    data: {
      username: "",
      password: "",
    },
  });

  const [errorInfo, setError] = useState({
    usernameError: "",
    passwordError: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
  }, [isAuthenticated, history]);

  const onLoginUser = (e) => {
    e.preventDefault();
    const isValid = validateInput(user.data, setError);
    if (isValid) {
      loginUser(user.data);
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
  const { usernameError, passwordError } = errorInfo;

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

        {error ? <p className="error-feedback">{error}</p> : ""}
      </div>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { loginUser })(Login);
