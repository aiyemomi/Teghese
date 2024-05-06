import React from "react";

import "./Navbar.css";
import logo_image from "../../assets/logo-cut.png";
import profile_placeholder from "../../assets/profile_placeholder.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo_image} className="logo" alt="logo" />
      <img
        src={profile_placeholder}
        className="profile-picture"
        alt="profile-picture"
      />
    </div>
  );
};

export default Navbar;
