import React from 'react';
import { Button } from '../UI';
import { BagIcon } from '../UI/Icons';
import { useCart } from '../Contexts/CartContext';
import { useData } from '../Contexts/DataContext';
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
        <img src={data.img} />
      </div>
      <div className="product-info">
        <h1 className="color-primary margin-no-top">{data.title}</h1>
        <p>{data.description}</p>
        <p>
          <strong>Price: </strong> ${data.price}
        </p>

        <div style={{ marginTop: 20 }}>
          <Button
            disabled={loading}
            onClick={handleClick}
            startIcon={<BagIcon style={{ marginBottom: 4 }} />}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
