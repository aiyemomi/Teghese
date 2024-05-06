import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import Product from "../Product/Product";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const get_products = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/product", {
        method: "GET",
      });
      const response_data = await response.json();
      setAllProducts(response_data);
      console.log(response_data);
    } catch (error) {
      console.error(`error: ${error}`);
    }
  };
  const remove_product = async (product_id) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/product/${product_id}`,
        {
          method: "DELETE",
        }
      );
      const resp_data = await response.json();
      console.log(resp_data);
      await get_products();
    } catch (error) {
      console.error(`error: ${error}`);
    }
  };
  useEffect(() => {
    get_products();
  }, []);
  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price </p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <>
              <Product
                key={index}
                _id={product._id}
                image={product.image}
                name={product.name}
                new_price={product.new_price}
                old_price={product.old_price}
                category={product.category}
                description={product.description}
                remove_product={remove_product}
              />
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
