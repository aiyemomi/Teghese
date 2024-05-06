import React, { useState } from "react";
import "./BestSellers.css";
import { data_product } from "../../Assets/Dummy/data";
import ItemCard from "../ItemCard/ItemCard";
const BestSellers = () => {
  const [activeMenu, setActiveMenu] = useState("pants");
  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
  };
  return (
    <div className=" best-sellers">
      <div className="best-sellers-section-title">
        <p className="title"> Our BestSellers </p>
        <p>see what everyone else is wearing</p>
      </div>

      <ul className="best-sellers-list">
        <li onClick={() => handleMenuClick("shirts")}>Shirts</li>
        <li onClick={() => handleMenuClick("pants")}>Pants</li>
        <li onClick={() => handleMenuClick("two-piece")}>Two Piece</li>
      </ul>
      <hr />
      <div className="slider-arrow"></div>

      <div className="best-sellers-images">
        {data_product.map((product, index) => {
          return (
            <ItemCard
              key={index}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.name}
            />
          );
        })}
      </div>
      <button>Shop Bestsellers</button>
    </div>
  );
};

export default BestSellers;
