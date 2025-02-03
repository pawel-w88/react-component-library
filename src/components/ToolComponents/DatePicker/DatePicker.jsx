import React from "react";

import "./DatePicker.scss";

export const DatePicker = ({ onSelectDate }) => {
  return (
    <input
      className="DataPicker "
      type="date"
      onChange={(e) => onSelectDate(e.target.value)}
    />
  );
};
