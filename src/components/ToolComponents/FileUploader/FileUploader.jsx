import React from "react";

import "./FileUploader.scss";

export const FileUploader = ({ onFileUpload }) => {
  return (
    <input
      className="FileUploader "
      type="file"
      onChange={(e) => onFileUpload(e.target.files[0])}
    />
  );
};
