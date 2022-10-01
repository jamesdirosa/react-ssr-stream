import React from "react";
import { Button } from "../UI";
import { Bag } from "../UI/Icons";
import { useCart } from "../Contexts/CartContext";
import { useData } from "../Contexts/DataContext";
const Coffee = () => {
  const [loading, setLoading] = React.useState(false);

  const { addItem } = useCart();
  const handleClick = async () => {
    setLoading(true);
    await addItem();
    setLoading(false);
  };
  const data = useData();
  return (
    <div className="container">
      <div className="product-img">
        <img style={{ width: "100%", height: 400 }} src={data.img} />
      </div>
      <div className="product-info">
        <h1 className="color-primary margin-no-top">{data.title}</h1>
        <p style={{ paddingTop: 20, lineHeight: "26px" }}>{data.description}</p>
        <p style={{ paddingTop: 10, lineHeight: "26px" }}>
          <strong>Price: </strong> ${data.price}
        </p>

        <div style={{ marginTop: 20 }}>
          <Button disabled={loading} onClick={handleClick} startIcon={<Bag />}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
