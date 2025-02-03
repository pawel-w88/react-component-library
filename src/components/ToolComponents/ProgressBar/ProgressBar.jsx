import React from "react";

import "./ProgressBar.scss";

export const ProgressBar = ({ progress }) => {
  return (
    <div className="ProgressBar ">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};
