import { Typography } from "@mui/material";
import React, { Suspense } from "react";
import { getComments } from "../../server/dal/api";
import { AppWrapper } from "../AppWrapper";
import { DataProvider } from "../Contexts/DataContext";
const SlowComponent = React.lazy(() => import("../SlowComponent"));
export const App = () => (
  <AppWrapper>
    <Typography>Hello </Typography>
    <DataProvider data={getComments()}>
      <Suspense fallback={"Loadings..."}>
        <SlowComponent />
      </Suspense>
    </DataProvider>
  </AppWrapper>
);
