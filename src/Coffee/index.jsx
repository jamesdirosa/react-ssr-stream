import { LocalMall } from "@mui/icons-material";
import { Button as MuiButton, Grid, Typography } from "@mui/material";
import React from "react";
import { Button } from "../UI";
import { Bag } from "../UI/Icons";
import { useCart } from "../Contexts/CartContext";
import { useData } from "../Contexts/DataContext";
const Coffee = () => {
  const [itemCount, setItemCount] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const { addItem } = useCart();
  const handleClick = async () => {
    setLoading(true);
    await addItem();
    setLoading(false);
  };
  const data = useData();
  return (
    <Grid container spacing={4}>
      <Grid item xs={5}>
        <img style={{ width: "100%", height: 400 }} src={data.img} />
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
          <Button disabled={loading} onClick={handleClick} startIcon={<Bag />}>
            Add to cart
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Coffee;
