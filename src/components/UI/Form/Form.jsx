import React from "react";
import "./Form.scss";
export const Form = ({ onSubmit, children }) => {
  return (
    <form className="Form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};
