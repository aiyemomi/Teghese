import React from "react";
import "./Shop.css";
import Item from "../Item/Item";
const Shop = ({ title, items = [] }) => {
  return (
    <div>
      <div className="shop-section">
        <h1>{title}</h1>
        <div className="shop-main-section">
          {items.map((item, index) => {
            return (
              <Item
                key={index}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            );
          })}
        </div>
        <button className="shop-section-btn">{title}</button>
      </div>
    </div>
  );
};

export default Shop;
