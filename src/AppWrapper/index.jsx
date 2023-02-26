import React from 'react';
import { Banner } from '../Banner';

export const AppWrapper = ({ children }) => {
  return (
    <>
      <Banner />
      <div className="page-wrap">{children}</div>
    </>
  );
};
