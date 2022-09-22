import { LocalMall } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useData } from "../Contexts/DataContext";

const Coffee = () => {
  const data = useData();
  return (
    <Grid container spacing={4}>
      <Grid item xs={5}>
        <image style={{ width: "100%", height: 400 }} src={data.img} />
      </Grid>
      <Grid item xs={7}>
        <Typography variant="h3">{data.title}</Typography>
        <Typography
          style={{ paddingTop: 20, lineHeight: "26px" }}
          variant="body2"
        >
          {data.description}
        </Typography>
        <Typography
          style={{ paddingTop: 10, lineHeight: "26px" }}
          variant="body2"
        >
          <strong>Price: </strong> ${data.price}
        </Typography>
        <div style={{ marginTop: 20 }}>
          <Button startIcon={<LocalMall />} variant="contained" color="primary">
            Add to cart
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Coffee;
