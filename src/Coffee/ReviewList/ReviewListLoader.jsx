import { Skeleton } from "../../UI/Skeleton";
import React from "react";

export const ReviewListLoader = () => {
  return (
    <div style={{ paddingTop: 30 }}>
      {[...Array(3)].map((item, idx) => {
        return <ReviewLoader key={idx} />;
      })}
    </div>
  );
};

const ReviewLoader = () => {
  return (
    <div
      style={{
        borderBottom: "1px solid #ccc",
        paddingBottom: 10,
        maxWidth: 400,
      }}
    >
      <div style={{ paddingTop: 8 }}>
        <span style={{ marginRight: 6 }}>
          <Skeleton circle width={18} height={18} />
        </span>
        <span style={{ marginRight: 6 }}>
          <Skeleton circle width={18} height={18} />
        </span>
        <span style={{ marginRight: 6 }}>
          <Skeleton circle width={18} height={18} />
        </span>
        <span style={{ marginRight: 6 }}>
          <Skeleton circle width={18} height={18} />
        </span>
        <span style={{ marginRight: 6 }}>
          <Skeleton circle width={18} height={18} />
        </span>
      </div>
      <Skeleton text fontSize={18} />
      <Skeleton text fontSize={18} />
      <Skeleton text fontSize={18} />
    </div>
  );
};
