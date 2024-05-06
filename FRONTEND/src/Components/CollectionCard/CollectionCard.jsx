import React from "react";
import "./CollectionCard.css";

const CollectionCard = ({ image, title, description }) => {
  return (
    <div className="collection-card">
      <img src={image} alt={title} />
      <div className="collection-text">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default CollectionCard;
