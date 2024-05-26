import React from "react";
import ShopCatDropdown from "../components/ShopCatDropdown/ShopCatDropdown";
import { all_product } from "../assets/Dummy/data";

const Sales = () => {
  return (
    <div>
      <ShopCatDropdown title="Sales" data={all_product} />
    </div>
  );
};

export default Sales;
