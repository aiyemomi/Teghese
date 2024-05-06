import React from "react";
import "./NewCollections.css";
import Item from "../Item/Item";
import { data_product } from "../../Assets/Dummy/data";
const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {/* {data_product.map((product, index) => {
          return (
            <Item
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.name}
            />
          );
        })} */}
      </div>
    </div>
  );
};

export default NewCollections;
