import React, { useEffect, useContext } from "react";
import "./CSS/ShopCategory.css";
import ShopCatDropdown from "../components/ShopCatDropdown/ShopCatDropdown";
import { all_product } from "../assets/Dummy/data";

const ShopCategory = ({ category, data }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top when the component is rendered
  }, []);
  return (
    <div>
      <ShopCatDropdown title={category} data={all_product} />
    </div>
  );
};

export default ShopCategory;
