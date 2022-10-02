import React from "react";
import { Banner } from "../Banner";

export const AppWrapper = ({ children }) => {
  return (
    <>
      <Banner />
      <div style={{ maxWidth: 800, margin: "30px auto" }}>{children}</div>
    </>
  );
};
