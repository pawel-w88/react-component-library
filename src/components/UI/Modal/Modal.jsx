import React from "react";

import "./Modal.scss";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="Modal">
        <button onClick={onClose} className="modal-close-button">
          X
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};
