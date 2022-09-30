import React from "react";
import "./styles.css";
export const Button = ({ children, onClick, disabled, startIcon }) => {
  return (
    <button className={disabled ? "disabled" : undefined} onClick={onClick}>
      {startIcon ? (
        <span style={{ marginRight: 4 }}>{startIcon}</span>
      ) : undefined}
      <span style={{ margin: "auto" }}>{children}</span>
    </button>
  );
};
