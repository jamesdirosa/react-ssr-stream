import React from "react";

export const BagIcon = ({ style, className }) => (
  <span
    style={{ ...style, verticalAlign: "middle" }}
    className={`material-symbols-outlined ${className}`}
  >
    local_mall
  </span>
);

export const CoffeeIcon = ({ style, className }) => (
  <span
    style={{ ...style, verticalAlign: "middle" }}
    className="material-symbols-outlined banner-icon"
  >
    local_cafe
  </span>
);
