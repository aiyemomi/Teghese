// import React from "react";
// import ShopCatDropdownTitle from "../ShopCatDropdownTitle/ShopCatDropdownTitle";
// import ShopCatDropdownContent from "../ShopCatDropdownContent/ShopCatDropdownContent";

// const ShopCatDropdown = () => {
//   return (
//     <div>
//     </div>
//   );
// };

// export default ShopCatDropdown;

import React from "react";
import Item from "../Item/Item";
import "./ShopCatDropdown.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ShopCatDropdownTitle from "../ShopCatDropdownTitle/ShopCatDropdownTitle";

const ShopCatDropdown = ({ title, data = [] }) => {
  return (
    <>
      <div className="category-section">
        <div className="category-breadcrumb-section">
          <Breadcrumbs title={title} />
        </div>
        <h1>{title}</h1>
        <div className="category-sort">
          <ShopCatDropdownTitle text="hello" />
        </div>
        <div className="category-section-main new">
          <div className="category-body">
            {data.map((product, index) => {
              return (
                <Item
                  key={index}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  new_price={product.new_price}
                  old_price={product.old_price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCatDropdown;
