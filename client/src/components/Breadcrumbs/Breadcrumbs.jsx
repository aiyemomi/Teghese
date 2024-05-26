import React from "react";
import "./Breadcrumbs.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
const Breadcrumbs = ({ name, category, title }) => {
  return (
    <div className="breadcrumb">
      <span className="breadcrumb-item">
        <Link className="breadcrumb-item-link" to="/">
          <p>Home</p>
          <ArrowForwardIosIcon style={{ fontSize: 8 }} />
        </Link>
      </span>
      <span className="breadcrumb-item">
        <Link className="breadcrumb-item-link" to="/">
          <p>{title}</p>
          <ArrowForwardIosIcon style={{ fontSize: 8 }} />
        </Link>
      </span>
      {/* <span className="breadcrumb-item">
        {category} <ArrowForwardIosIcon style={{ fontSize: 12 }} />
      </span> */}
    </div>
  );
};

export default Breadcrumbs;
