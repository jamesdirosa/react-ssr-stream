import React, { Suspense } from "react";
import { DataProvider } from "../Contexts/DataContext";
import { loadProfile } from "../../server/dal/api";
const Profile = React.lazy(() => import("./Profile"));

export const AppWrapper = ({ children }) => {
  return (
    <>
      <DataProvider data={loadProfile()}>
        <Suspense fallback={"loading..."}>
          <Profile />
        </Suspense>
      </DataProvider>
      <div style={{ maxWidth: 800, margin: "30px auto" }}>{children}</div>
    </>
  );
};
