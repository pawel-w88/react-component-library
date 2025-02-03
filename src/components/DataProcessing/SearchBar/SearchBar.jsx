import React from "react";

import "./SearchBar.scss";

export const SearchBar = ({ onChange }) => {
  return (
    <div className="SearchBar ">
      <input
        type="text"
        placeholder="Wpisz frazę"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
