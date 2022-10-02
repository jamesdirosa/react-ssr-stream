import React from "react";
import "./styles";

export const Badge = ({ children, text }) => {
  return (
    <>
      {children}
      {text ? <span className="badge">{text}</span> : null}
    </>
  );
};
