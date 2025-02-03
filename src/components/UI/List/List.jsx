import React from "react";

import "./List.scss";

export const List = ({ items }) => {
  return (
    <ul className="List ">
      {items.map((item, index) => (
        <li key={index} className="List-item ">
          {item}
        </li>
      ))}
    </ul>
  );
};
