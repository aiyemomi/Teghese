import React from "react";
import ShopCatDropdown from "../components/ShopCatDropdown/ShopCatDropdown";
import { all_product } from "../assets/Dummy/data";

const New = () => {
  return (
    <div>
      <ShopCatDropdown title="New" data={all_product} />
    </div>
  );
};

export default New;
