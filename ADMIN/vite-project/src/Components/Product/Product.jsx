import React from "react";
import "./Product.css";
import CloseIcon from "@mui/icons-material/Close";
const Product = ({
  _id,
  name,
  image,
  description,
  new_price,
  old_price,
  category,
  remove_product,
}) => {
  return (
    <div className="listproduct-format-main listproduct-format">
      <img className="product-image" src={image} />
      <p> {name}</p>
      {/* <p>{description}</p> */}
      <p>{new_price}</p>
      <p>{old_price}</p>
      <p>{category}</p>
      <CloseIcon
        onClick={() => {
          remove_product(_id);
        }}
        style={{ cursor: "pointer", margin: "auto" }}
      />
    </div>
  );
};

export default Product;
