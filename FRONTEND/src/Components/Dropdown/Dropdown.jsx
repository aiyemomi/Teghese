import React, { useEffect, useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = ({ activeMenu, subItems, makeVisible, images }) => {
  const [visibleSubItems, setVisibleSubItems] = useState([]);
  const [transitioning, setTransitioning] = useState(false);


  useEffect(() => {
    setTransitioning(true);
    setTimeout(() => {
      setVisibleSubItems(subItems);
      setTransitioning(false);
    }, 50); // Adjust the transition duration as needed
  }, [subItems]);
  return (
    <div
      onMouseEnter={() => {
        makeVisible(true);
      }}
      onMouseLeave={() => {
        makeVisible(false);
      }}
      className={`dropdown-section ${transitioning ? "transitioning" : ""}`}
    >
      <div className="dropdownList">
        <ul>
          {subItems.map((item, index) => {
            return (
              <li key={index}>
                {/* <Link to={`${path}/${item}`}>{item}</Link> */}
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="dropdown-section-images">
        {images.map((image) => {
          return <img src={image} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Dropdown;
