import React, { useMemo, useState } from "react";
import Hero from "../components/Hero/Hero";
import BestSellers from "../components/BestSellers/BestSellers";
import WeOffer from "../components/Features/Features";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import ShopInstagram from "../components/ShopInstagram/ShopInstagram";
import Collections from "../components/Collections/Collections";
import Lookbook from "../components/Lookbook/Lookbook";
import Stories from "../components/Stories/Stories";
import Shop from "../components/Shop/Shop";
import {
  bestseller_items,
  lookbook_section_items,
  new_collections,
} from "../assets/Dummy/data";

const Home = () => {
  const [data, setData] = useState();
  const memoizedData = useMemo(() => {
    try {
      // const response = await fetchDataFromDatabase(currentUser.id);
      // setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });
  return (
    <>
      <Hero />
      <Collections />
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
