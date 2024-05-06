import React from "react";
import "./Features.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import SyncIcon from "@mui/icons-material/Sync";
const Features = () => {
  return (
    <div className="feature-section">
      {/* <h1 className="feature-title"> Why choose Teghese</h1> */}
      <div className="features">
        <div className="feature">
          <span className="feature-icon">
            <SyncIcon />
          </span>
          <h1>Returns & Exchanges</h1>
          <p>14-day returns on full priced purchases</p>
        </div>
        <div className="feature">
          <span className="feature-icon">
            <InventoryIcon />
          </span>
          <h1>Uber fast delivery</h1>
          <p>Delivered to your door in under 3 days</p>
        </div>
        <div className="feature">
          <span className="feature-icon">
            <LocalShippingIcon />
          </span>
          <h1>Free Shipping</h1>
          <p>Free express shipping on domestic orders over ₦20,000</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
