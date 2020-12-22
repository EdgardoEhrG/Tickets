import React from "react";

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

export default CustomButton;
