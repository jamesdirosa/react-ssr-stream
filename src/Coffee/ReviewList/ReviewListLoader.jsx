import { Skeleton } from "@mui/material";
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
          <Skeleton
            style={{ display: "inline-block" }}
            variant="circular"
            width={18}
            height={18}
          />
        </span>
        <span style={{ marginRight: 6 }}>
          <Skeleton
            style={{ display: "inline-block" }}
            variant="circular"
            width={18}
            height={18}
          />
        </span>
        <span style={{ marginRight: 6 }}>
          <Skeleton
            style={{ display: "inline-block" }}
            variant="circular"
            width={18}
            height={18}
          />
        </span>
        <span style={{ marginRight: 6 }}>
          <Skeleton
            style={{ display: "inline-block" }}
            variant="circular"
            width={18}
            height={18}
          />
        </span>
        <span style={{ marginRight: 6 }}>
          <Skeleton
            style={{ display: "inline-block" }}
            variant="circular"
            width={18}
            height={18}
          />
        </span>
      </div>
      <Skeleton variant="text" sx={{ fontSize: "3rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </div>
  );
};
