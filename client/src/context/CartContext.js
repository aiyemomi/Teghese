import { createContext, useState } from "react";
import { all_product } from "../assets/Dummy/data";

export const CartContext = createContext();
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};
const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const getNumberofCartItems = () => {
    let numberOfItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        numberOfItems += cartItems[item];
      }
    }
    return numberOfItems;
  };
  const contextValue = {
    getTotalCartAmount,
    getNumberofCartItems,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
export default CartContextProvider;
