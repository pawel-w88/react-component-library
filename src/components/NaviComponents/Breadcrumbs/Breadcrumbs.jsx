import React from "react";
import "./Breadcrumbs.scss";

export const Breadcrumbs = ({ paths }) => {
  return (
    <div className="Breadcrumbs ">
      {paths.map((path, index) => (
        <span key={index}>
          {path}
          {index !== paths.lenght - 1 && <span> &gt; </span>}
        </span>
      ))}
    </div>
  );
};
