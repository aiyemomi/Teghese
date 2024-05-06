import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = ({ image, name, price, description, id }) => {
  return (
    <div className="item-container">
      <div className="item">
        <Link to={`/product/${id}`}>
          <img onClick={window.scrollTo(0, 0)} alt={name} src={image} />
        </Link>
        <div className="item-info">
          <p className="item-name">{name}</p>
          <p className="item-description">{description}</p>
          <p className="item-prices">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
