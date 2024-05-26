import React, { useContext } from "react";
import "./ProductDisplay.css";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { CartContext } from "../../context/CartContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-display-img">
          <img
            className="product-display-main-img"
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          <StarOutlineIcon />
          <p>(122)</p>
        </div>
        <div className="product-display-price">N{product.price}</div>
        <div className="product-display-description">
          A lightweight, usually knitted, pullover shirt, close fitting, round
          neckiline.
        </div>
        <div className="product-display-size">
          <h1>Select size</h1>
          <div className="product-display-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="product-display-category">
          <span>Category:</span>
          Women, T-Shirt
        </p>
        <p className="product-display-category">
          <span>Tags:</span>
          Modern, Latest T-Shirt
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
