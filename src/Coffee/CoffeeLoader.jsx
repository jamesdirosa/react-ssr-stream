import { Grid, Skeleton } from "@mui/material";
import React from "react";

export const CoffeeLoader = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={5}>
        <Skeleton variant="rectangular" width={"100%"} height={400} />
      </Grid>
      <Grid item xs={7}>
        <Skeleton variant="text" sx={{ fontSize: "4rem" }} />
        <Skeleton
          style={{ paddingTop: 30 }}
          variant="text"
          sx={{ fontSize: "1rem" }}
        />
        <Skeleton
          style={{ paddingTop: 30 }}
          variant="text"
          sx={{ fontSize: "1rem" }}
        />
        <div style={{ marginTop: 20 }}>
          <Skeleton variant="rectangular" width={100} height={40} />
        </div>
      </Grid>
    </Grid>
  );
};
