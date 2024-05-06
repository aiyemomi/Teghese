import React from "react";
import "./Breadcrumbs.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
const Breadcrumbs = ({ name, category }) => {
  //   const product = props;
  return (
    <div className="breadcrumb">
      <span className="breadcrumb-item">
        <Link to="/">
          {" "}
          HOME <ArrowForwardIosIcon style={{ fontSize: 12 }} />
        </Link>
      </span>{" "}
      <span className="breadcrumb-item">
        <Link to="/">
          {" "}
          SHOP <ArrowForwardIosIcon style={{ fontSize: 12 }} />
        </Link>
      </span>{" "}
      <span className="breadcrumb-item">
        {category} <ArrowForwardIosIcon style={{ fontSize: 12 }} />
      </span>
      <span className="breadcrumb-item">{name}</span>
    </div>
  );
};

export default Breadcrumbs;
