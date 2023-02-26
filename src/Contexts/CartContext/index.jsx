import React, { createContext, useContext } from 'react';
import { awaitMs } from '../../helpers/awaitTimeout';
export let data;

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [itemCount, setItemCount] = React.useState(0);

  const data = {
    itemCount,
    setItemCount,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  const addItem = async () => {
    await awaitMs(500);
    ctx.setItemCount((c) => c + 1);
  };
  data = {
    addItem,
    itemCount: ctx.itemCount,
  };
  return data;
}
