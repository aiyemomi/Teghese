import React, { useState } from "react";
import "./AddProduct.css";
import upload_icon from "../../assets/upload_image-_icon.png";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
    available: true,
  });
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const toggleAvailable = (e) => {
    setProductDetails({
      ...productDetails,
      available: e.target.value === "true",
    });
  };
  const addProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productDetails.name);
    formData.append("description", productDetails.description);
    formData.append("category", productDetails.category);
    formData.append("new_price", productDetails.new_price);
    formData.append("old_price", productDetails.old_price);
    formData.append("available", productDetails.available);

    formData.append("image", image);
    try {
      const response = await fetch("http://localhost:3001/api/v1/product", {
        method: "POST",
        body: formData,
      });
      const resp_data = await response.json();
      console.log(resp_data);
    } catch (error) {
      console.error(`error: ${error}`);
    }
  };
  return (
    <form onSubmit={addProduct}>
      <div className="add-product">
        <div className="additem-field">
          <p>Product title</p>
          <input
            value={productDetails.name}
            type="text"
            placeholder="Type here"
            name="name"
            onChange={changeHandler}
          />
        </div>
        <div className="additem-field">
          <p>Description</p>
          <input
            value={productDetails.description}
            type="text"
            placeholder="Type here"
            name="description"
            onChange={changeHandler}
          />
        </div>

        <div className="addproduct-price">
          <div className="additem-field">
            <p>Price</p>
            <input
              value={productDetails.old_price}
              type="text"
              placeholder="Type here"
              name="old_price"
              onChange={changeHandler}
            />
          </div>

          <div className="additem-field">
            <p>Offer Price</p>
            <input
              value={productDetails.new_price}
              type="text"
              placeholder="Type here"
              name="new_price"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="additem-field">
          <p>Product Category</p>
          <select
            value={productDetails.category}
            name="category"
            className="addproduct-selector"
            onChange={changeHandler}
          >
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div className="additem-field">
          <p>Available</p>
          <select
            value={productDetails.available}
            className="addproduct-selector"
            onChange={toggleAvailable}
          >
            <option value={true}>Available</option>
            <option value={false}>Not Available</option>
          </select>
        </div>
        <div className="additem-field">
          <label htmlFor="file-input">
            <img
              src={image ? URL.createObjectURL(image) : upload_icon}
              alt="upload-icon"
              className="addproduct-thumbnail"
            />
          </label>
          <input
            onChange={imageHandler}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
        </div>
        <button type="submit" className="addproduct-btn">
          ADD
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
