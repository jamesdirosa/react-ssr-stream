import React from "react";
import { useData } from "../Contexts/DataContext";

export const SlowComponent = () => {
  const data = useData();
  return <ChildComponent name={data[0].userName} />;
};

const ChildComponent = ({ name }) => {
  return <span>{name}</span>;
};

export default SlowComponent;
