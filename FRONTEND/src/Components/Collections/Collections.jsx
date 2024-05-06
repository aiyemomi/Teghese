import React from "react";
import "./Collections.css";
import { collection_cards } from "../../Assets/Dummy/data";
import CollectionCard from "../CollectionCard/CollectionCard";
import card_img from "../../Assets/Dummy/Hero/nav-img-woman2.jpg";

const Collections = () => {
  return (
    <div className="collections">
      <h1>Browse Styles</h1>
      <h2>explore our select list of collections</h2>
      <div className="collections-cards">
        {collection_cards.map((card) => {
          return (
            <CollectionCard
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
