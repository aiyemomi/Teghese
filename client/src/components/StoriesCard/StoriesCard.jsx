import React from "react";
import "./StoriesCard.css";
const StoriesCard = ({ image, title, story }) => {
  return (
    <div className="stories-card">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h3>{story}</h3>
    </div>
  );
};

export default StoriesCard;
