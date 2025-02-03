import React, { useState } from "react";

import "./Tabs.scss";

export const Tabs = ({ defalutTab, children }) => {
  const [activeTab, setActiveTab] = useState(defalutTab || 0);
  return (
    <div className="Tabs">
      <div className="Tab-buttons">
        {children.map((child, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={index === activeTab ? "active" : ""}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="Tab-content">{children[activeTab]}</div>
    </div>
  );
};
