import React from "react";

export const Bag = ({ style, className }) => (
  <span
    style={{ ...style, verticalAlign: "middle" }}
    className={`material-symbols-outlined ${className}`}
  >
    local_mall
  </span>
);
