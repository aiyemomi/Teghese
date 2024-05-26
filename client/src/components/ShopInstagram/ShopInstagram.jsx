import React from "react";
import "./ShopInstagram.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import { shop_ig } from "../../assets/Dummy/data";
const ShopInstagram = () => {
  return (
    <div className="shop-instagram">
      <div className="shop-instagram-info">
        <h1>Shop Instagram</h1>
        <p>
          shop looks from our <span>instagram</span>
          <InstagramIcon style={{fontSize: 20, marginLeft: 10}} />
        </p>
        <p>
          tag <span>@teghese</span> for a chance to be featured
        </p>
      </div>

      <div className="shop-instagram-images">
        {shop_ig.map((image, index) => {
          return (
            <div key={index} className="image-container">
              <img src={image} alt="instagram" />
              <div className="overlay"></div>
              <button className="shop-btn">Shop Now</button>
              <span className="hover-icon"></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopInstagram;
