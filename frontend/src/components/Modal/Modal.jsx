import React from "react";

import PropTypes from "prop-types";

import "./Modal.scss";

const Modal = (props) => {
  const { header, visible, children, dismiss } = props;
  return (
    <>
      {visible ? (
        <div className="modal-wrapper">
          <div className="modal-box">
            <div className="modal-box-header">
              <h3>{header}</h3>
              <button onClick={dismiss}>X</button>
            </div>
            {children}
          </div>
          <div className="modal-bg"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

Modal.propTypes = {
  header: PropTypes.string,
  visible: PropTypes.bool,
  children: PropTypes.any,
  dismiss: PropTypes.func,
};

export default Modal;
