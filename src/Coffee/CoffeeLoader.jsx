import React from "react";
import { Skeleton } from "../UI/Skeleton";
import "./styles.css";

export const CoffeeLoader = () => {
  return (
    <div className="container">
      <div className="product-img">
        <Skeleton block height={400} width={"100%"} />
      </div>
      <div className="product-info">
        <div>
          <Skeleton text fontSize={"4rem"} />
        </div>
        <div style={{ paddingTop: 30 }}>
          <Skeleton text fontSize={"1rem"} />
          <Skeleton text fontSize={"1rem"} />
          <Skeleton text fontSize={"1rem"} />
        </div>
        <div style={{ paddingTop: 30 }}>
          <Skeleton block width={131} height={31} />
        </div>
      </div>
    </div>
  );
};
