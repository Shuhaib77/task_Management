import React from "react";

function Input({ placeholder, handleChange, value, name, type, handleBlur,className }) {
  const basicStyle = "p-3 w-full bg-green-50 border";
  return (
    <input
      placeholder={placeholder}
      className={`${basicStyle} ${className}`}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      name={name}
      type={type}
    />
  );
}

export default Input;
