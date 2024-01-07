import { createContext, useCallback, useState } from "react";

const cartStorageKey = "CART";

const defaultCartItems =
  JSON.parse(window.localStorage.getItem(cartStorageKey) ?? "null") ?? [];

export const CartContext = createContext({
  items: defaultCartItems,
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(defaultCartItems);

  const addToCart = useCallback(
    (product) => {
      const newCartItems = [...cartItems];
      const productInCart = newCartItems.find(
        ({ ProductID }) => parseInt(ProductID) === product.ProductID
      );
      // Bad mutation!
      if (productInCart) {
        productInCart.Quantity += 1;
      } else {
        newCartItems.push({ ...product, Quantity: 1 });
      }
      window.localStorage.setItem(cartStorageKey, JSON.stringify(newCartItems));
      setCartItems(newCartItems);
    },
    [cartItems]
  );

  const removeFromCart = useCallback(
    (product) =>
      setCartItems((prevCartItems) => {
        const newCartItems = prevCartItems.filter(
          ({ ProductID }) => ProductID !== product.ProductID
        );
        window.localStorage.setItem(
          cartStorageKey,
          JSON.stringify(newCartItems)
        );
        return newCartItems;
      }),
    []
  );

  return (
    <CartContext.Provider
      value={{ items: cartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
