import React from "react";

import PropTypes from "prop-types";

const CustomButton = (props) => {
  const { label, type, className, handleClick, disabled } = props;
  return (
    <>
      <button
        type={type}
        className={className}
        onClick={handleClick}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default CustomButton;
