import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavItem.css";
const NavItem = ({ label, path, menu, setMenu, subItems, makeVisible }) => {
  return (
    <>
      <li
        onMouseEnter={() => {
          setMenu();
          setTimeout(() => makeVisible(true), 5);
        }}
        onMouseLeave={() => {
          makeVisible(false);
        }}
      >
        <Link
          className="nav-item-link"
          to={path}
          style={{
            textDecoration: "none",
            color: label.toLowerCase() === "sales" ? "#DC2F2F" : "#31363f",
          }}
        >
          {label}
        </Link>
        {menu === label.toLowerCase() && <hr className="menu-hr" />}
      </li>
    </>
  );
};

export default NavItem;
