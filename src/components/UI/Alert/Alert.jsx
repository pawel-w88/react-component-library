import React from "react";

import "./Alert.scss";

export const Alert = ({ type, message }) => {
  return <div className={`Alert ${type}`}>{message}</div>;
};
