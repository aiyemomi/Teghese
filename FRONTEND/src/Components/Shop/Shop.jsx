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
                id={item.id}
                name={item.name}
                description={item.description}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
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
