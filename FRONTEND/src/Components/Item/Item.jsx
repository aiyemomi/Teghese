import React, { useState } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Item = ({ image, name, new_price, description, id, old_price }) => {
  const [mouseOnFave, setMouseOnFave] = useState(false);
  return (
    <div className="item-container">
      <div className="item">
        <Link to={`/product/${id}`}>
          <img
            onClick={() => {
              console.log(name, new_price, id, description);
              window.scrollTo(0, 0);
            }}
            alt={name}
            src={image}
          />
        </Link>
        <div className="item-info">
          <p className="item-name">{name}</p>
          <p className="item-description">{description}</p>
          <div className="item-prices">
            <p className="new-price">{new_price}</p>
            {old_price && <p className="old-price">{old_price}</p>}
          </div>
        </div>
        <span
          onMouseEnter={() => setMouseOnFave(true)}
          onMouseLeave={() => setMouseOnFave(false)}
          className="item-favorite-icon"
        >
          {mouseOnFave ? (
            <FavoriteIcon />
          ) : (
            <FavoriteBorderIcon className="item-fave-icon" />
          )}
        </span>
      </div>
    </div>
  );
};

export default Item;
