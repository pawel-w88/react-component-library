import React, { useState } from "react";
import "./DropdownMenu.scss";

export const DropdownMenu = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(option);
    setIsOpen(false); // Zamknij menu po wybraniu opcji
  };

  return (
    <div className="DropdownMenu">
      <div className="dropdown-header" onClick={handleToggle}>
        <span>{title}</span>
        <span className={`icon ${isOpen ? "open" : ""}`}>
          {isOpen ? "▲" : "▼"}
        </span>
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
