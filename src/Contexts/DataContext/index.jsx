import React, { createContext, useContext } from "react";

export let data;

const DataContext = createContext(null);

export function DataProvider({ children, data }) {
  // Update to keep data in state. data, fetch, refetch
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export function useData() {
  const ctx = useContext(DataContext);
  data = ctx.read();
  return data;
}
