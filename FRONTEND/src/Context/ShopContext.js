import React, { createContext } from "react";
import { all_product } from "../assets/Dummy/data";
export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const contextValue = { all_product };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
