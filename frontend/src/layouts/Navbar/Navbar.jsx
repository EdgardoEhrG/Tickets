import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";

const Navbar = (props) => {
  const { isAuthenticated } = props;
  const history = useHistory();

  const logoutUser = () => {
    history.push("/");
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="navbar">
          <div className="container">
            <Link to={"/dashboard"} className="navbar-brand">
              Ticket App
            </Link>
            <nav className="collapses navbar-collapses">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div className="btn" onClick={logoutUser}>
                    <i className="fas fa-sign-out-alt"></i> {""}
                    <span>Logout</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
