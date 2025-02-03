import React from "react";

import "./DataVisualization.scss";

export const DataVisualization = ({ data }) => {
  return (
    <div className="DataVisualization">
      {/* Tutaj możesz wyświetlić dane */}
      {data && (
        <ul>
          {data.map((post, id) => (
            <li key={id}>{post.title}</li> // Tutaj wyświetlasz dane
          ))}
        </ul>
      )}
    </div>
  );
};
