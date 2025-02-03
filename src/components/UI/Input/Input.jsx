import React from "react";
import "./Input.scss";
export const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className={`Input`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
