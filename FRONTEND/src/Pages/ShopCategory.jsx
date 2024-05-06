import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={banner}></img>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1 -12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <ArrowDropDownIcon />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, index) => {
          return category === item.category ? (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              description={item.name}
            />
          ) : null;
        })}
      </div>
      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
