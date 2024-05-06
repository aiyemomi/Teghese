import React from "react";
import "./RelatedProducts.css";
import { data_product } from "../../Assets/Dummy/data";
import Item from "../Item/Item";
const RelatedProducts = () => {
  return (
    <div className="related-products">
      <h1>Related Products</h1>
      <hr />
      <div className="related-products-item">
        {data_product.map((product, index) => {
          return (
            <Item
              key={index}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
