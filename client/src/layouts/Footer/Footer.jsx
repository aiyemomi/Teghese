import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section-1">
        <div className="info">
          <p>Info</p>
          <ul>
            <li>Contact us</li>
            <li>Size + Fit Guide</li>
            <li>About</li>
            <li>Company</li>
            <li>Offices</li>
            <li>Products</li>
          </ul>
        </div>
        <div className="shop-by-category">
          <p>Shop by Category</p>
          <ul>
            <li>Pants</li>
            <li>Swimwear</li>
            <li>Sweaters</li>
            <li>Tops</li>
            <li>Accessories</li>
            <li>Jumpsuits</li>
          </ul>
        </div>
        <div className="social-media">
          <p>Follow @ Teghese</p>
          <div className="footer-social-icon">
            <div className="footer-icons-container">
              <FacebookIcon style={{ fontSize: 14 }} />
            </div>
            <div className="footer-icons-container">
              <InstagramIcon style={{ fontSize: 14 }} />
            </div>
            <div className="footer-icons-container">
              <XIcon style={{ fontSize: 14 }} />
            </div>
            <div className="footer-icons-container">
              <WhatsAppIcon style={{ fontSize: 14 }} />
            </div>
            <div className="footer-icons-container">
              <YouTubeIcon style={{ fontSize: 14 }} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright @ 2024 - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
