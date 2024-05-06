import React, { useContext } from "react";
import "./CartItems.css";
import { CartContext } from "../../Context/CartContext";
import ClearIcon from "@mui/icons-material/Clear";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(CartContext);
  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        return (
          cartItems[e.id] > 0 && (
            <div key={e.id}>
              <div className="cart-items-format cart-items-format-main">
                <img src={e.image} alt={e.name} />
                <p>{e.name}</p>
                <p>{e.price}</p>
                <button className="cart-items-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{parseFloat(e.price) * cartItems[e.id]}</p>
                <span
                  className="remove-icon"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                >
                  <ClearIcon />
                </span>
              </div>
              <hr />
            </div>
          )
        );
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cart-items-total-items">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-items">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <div className="cart-items-total-items">
              <h3>Total</h3>
              <h3>N{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed to Checkout</button>
        </div>
        <div className="cart-items-promocode">
          <p>If you have a promocode, Enter here</p>
          <div className="cart-items-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
