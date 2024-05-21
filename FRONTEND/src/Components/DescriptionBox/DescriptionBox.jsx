import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-navbox">Description</div>
        <div className="description-box-navbox fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>
          An e-commerce site is an online site that allows me to eat the food
        </p>
        <p>E-xommerce sites are blah blah blah</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
