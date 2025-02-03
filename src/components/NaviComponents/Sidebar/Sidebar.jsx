import React from "react";
import "./Sidebar.scss";

export const Sidebar = ({ items }) => {
  return (
    <div className="Sidebar ">
      <ul>
        {items.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
