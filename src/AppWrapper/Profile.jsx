// import { LocalMall } from "@mui/icons-material";
// import { Avatar, Badge, IconButton } from "@mui/material";
import React from "react";
import { useCart } from "../Contexts/CartContext";
import { useData } from "../Contexts/DataContext";

const Profile = () => {
  const data = useData();
  const cart = useCart();
  return (
    <>
      {/* <IconButton sx={{ p: 0 }}>
        <Avatar src={data.url} />
      </IconButton>
      <span style={{ paddingLeft: 8 }}>
        <Badge badgeContent={cart.itemCount} color="primary">
          <LocalMall fontSize="large" />
        </Badge>
      </span> */}
    </>
  );
};

export default Profile;
