import axios from "axios";
import React, { useState } from "react";
import { Spinners } from "../../ToolComponents/Spinners/Spinners";
import { DataVisualization } from "../../DataProcessing/DataVisualization";
import "./HttpRequest.scss";

export const HttpRequest = ({ url, method, data, onSuccess, onError }) => {
  const [loading, setLoading] = useState(false);
  const request = async () => {
    setLoading(true);
    try {
      const response = await axios[method.toLowerCase()](url, data);
      onSuccess(response.data);
    } catch (error) {
      onError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {loading ? (
        <Spinners />
      ) : (
        <button onClick={request}>Wyślij żądanie</button>
      )}
    </div>
  );
};
