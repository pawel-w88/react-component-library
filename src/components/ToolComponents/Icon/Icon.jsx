import React from "react";
import * as LucideIcons from 'lucide-react';
import "./Icon.scss";


export const Icon = ({ name, size = 24, color = "currentColor" }) => {
  // Użyj nazwy ikony, aby wybrać odpowiednią ikonę SVG z Lucide Icons
  const IconComponent = LucideIcons[name];

  if (!IconComponent) {
    console.error(`Nie znaleziono ikony o nazwie ${name}`);
    return null;
  }

  return <IconComponent size={size} color={color} />;
};
