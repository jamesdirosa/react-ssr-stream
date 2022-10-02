import React from "react";
import { useCart } from "../Contexts/CartContext";
import { useData } from "../Contexts/DataContext";
import { Badge } from "../UI/Badge";
import { Bag } from "../UI/Icons";
export default Profile = () => {
  const data = useData();
  const cart = useCart();

  return (
    <>
      <img src={data.url} className="avatar profile-avatar" />
      <Badge text={cart.itemCount}>
        <Bag className="banner-icon" />
      </Badge>
    </>
  );
};
