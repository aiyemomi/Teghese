import React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link
        to={"/addproduct"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="sidebar-item">
          <AddCircleIcon />
          Add Product
        </div>
      </Link>
      <Link
        to={"/listproduct"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="sidebar-item">
          <ListAltIcon />
          List Product
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
