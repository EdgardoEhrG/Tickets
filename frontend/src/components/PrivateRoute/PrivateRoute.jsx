import React from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import PropTypes from "prop-types";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      {isAuthenticated ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { pure: false })(PrivateRoute);
