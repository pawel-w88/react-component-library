import React from "react";
import "./Button.scss";
export const Button = ({ onClick, children }) => {
  return (
    <button className={`Button`} onClick={onClick}>
      {children}
    </button>
  );
};
