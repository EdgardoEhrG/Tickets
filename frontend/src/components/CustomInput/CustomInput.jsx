import React from "react";
import PropTypes from "prop-types";

const CustomInput = (props) => {
  const {
    id,
    name,
    type,
    placeholder,
    onChange,
    className,
    value,
    error,
    label,
  } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        className={className}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={false}
        style={{ border: error ? "solid 1px red" : "" }}
      />
      {error ? <p style={{ color: "red", fontSize: "14px" }}>{error}</p> : ""}
    </>
  );
};

CustomInput.defaultProps = {
  type: "text",
  className: "",
};

CustomInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default CustomInput;
