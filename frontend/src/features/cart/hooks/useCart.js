import { useContext, useMemo } from "react";
import { CartContext } from "@/features/cart/providers";

const useCart = () => {
  const cartContext = useContext(CartContext);

  const total = useMemo(
    () =>
      cartContext.items.reduce(
        (acc, { Price, Quantity = 1 }) => acc + Price * Quantity,
        0
      ),
    [cartContext.items]
  );

  const count = useMemo(
    () =>
      cartContext.items.reduce((acc, { Quantity = 1 }) => acc + Quantity, 0),
    [cartContext.items]
  );

  return {
    total: total.toFixed(2),
    count,
    countDisctinct: cartContext.items.length,
    isEmpty: cartContext.items.length === 0,
    ...cartContext,
  };
};

export default useCart;
