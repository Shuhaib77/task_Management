import React from "react";

function Button({ name, type ,className,onClick}) {
  const basicStyle = "p-2 cursor-pointer ";
  return (
    <button type={type} className={`${basicStyle} ${className}`} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
