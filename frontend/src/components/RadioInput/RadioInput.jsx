import React from "react";

import PropTypes from "prop-types";

const RadioInput = (props) => {
  const { id, name, onChange, className, value, error, labelClassName } = props;
  return (
    <>
      <input
        type="radio"
        className={className}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="false"
      />
      <label
        htmlFor={id}
        style={{ color: error ? "red" : "#36404a", fontWeight: "normal" }}
        className={labelClassName}
      >
        {value}
      </label>
    </>
  );
};

RadioInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default RadioInput;
