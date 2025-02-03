import React from "react";

import "./Filters.scss";

export const Filters = ({ filters, onChange }) => {
  return (
    <div className="Filters ">
      {filters.map((filter, index) => (
        <input
          key={index}
          type="text"
          placeholder="{`Wpisz ${filter}`}"
          onChange={(e) => onChange(filter, e.target.value)}
        />
      ))}
    </div>
  );
};
