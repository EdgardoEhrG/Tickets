import React from "react";

import PropTypes from "prop-types";

const CustomButton = (props) => {
  const { label, type, className, handleClick } = props;
  return (
    <>
      <button type={type} className={className} onClick={handleClick}>
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
};

export default CustomButton;
