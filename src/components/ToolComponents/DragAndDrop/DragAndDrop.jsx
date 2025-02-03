import React from "react";
import "./DragAndDrop.scss";


export const DragAndDrop = ({ onDrop, children }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    onDrop(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="DragAndDrop"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {children}
    </div>
  );
};
