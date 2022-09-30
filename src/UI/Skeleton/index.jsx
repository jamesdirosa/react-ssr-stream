import React from "react";
import "./styles.css";
export const Skeleton = ({ text, circle, block, width, height, fontSize }) => {
  if (circle) {
    return (
      <div
        style={{
          display: "inline-block",
          width: width ? width : 25,
          height: height ? height : 25,
        }}
        className="skeleton skeleton-circle"
      ></div>
    );
  }
  if (block) {
    return (
      <div style={{ width, height }} className="skeleton skeleton-block"></div>
    );
  }
  return (
    <div
      style={{ fontSize: fontSize ? fontSize : 16 }}
      className="skeleton skeleton-text"
    >
      placeholder
    </div>
  );
};
