import React from "react";
import "./Collections.css";
import { collection_cards } from "../../assets/Dummy/data";
import CollectionCard from "../CollectionCard/CollectionCard";
import card_img from "../../assets/Dummy/Hero/nav-img-woman2.jpg";

const Collections = () => {
  return (
    <div className="collections">
      <h1>Browse Styles</h1>
      <h2>explore our select list of collections</h2>
      <div className="collections-cards">
        {collection_cards.map((card, index) => {
          return (
            <CollectionCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
