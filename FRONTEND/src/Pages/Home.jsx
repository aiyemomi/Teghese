import React from "react";
import Hero from "../Components/Hero/Hero";
import BestSellers from "../Components/BestSellers/BestSellers";
import Offers from "../Components/Offers/Offers";
import WeOffer from "../Components/Features/Features";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import ShopInstagram from "../Components/ShopInstagram/ShopInstagram";
import Collections from "../Components/Collections/Collections";
import Lookbook from "../Components/Lookbook/Lookbook";
import Stories from "../Components/Stories/Stories";
import Shop from "../Components/Shop/Shop";
import {
  bestseller_items,
  lookbook_section_items,
  new_collections,
} from "../Assets/Dummy/data";
import CustomerFeedback from "../Components/CustomerFeedback/CustomerFeedback";

const Home = () => {
  return (
    <>
      <Hero />
      <Collections />
      <CustomerFeedback />
      <Shop title="shop bestsellers" items={bestseller_items} />
      {/* <BestSellers /> */}
      <Lookbook />
      <Shop title="shop the reset" items={lookbook_section_items} />
      {/* <Offers /> */}
      {/* <NewCollections /> */}
      <Stories />
      <WeOffer />
      <ShopInstagram />

      <NewsLetter />
    </>
  );
};

export default Home;
