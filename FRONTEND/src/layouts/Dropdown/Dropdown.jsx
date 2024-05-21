import React, { useEffect, useState, useMemo } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = ({ activeMenu, subItems, makeVisible, images }) => {
  const [visibleSubItems, setVisibleSubItems] = useState([]);
  const [transitioning, setTransitioning] = useState(false);
  const memoizedSubItems = useMemo(() => subItems, [subItems]);
  const memoizedImages = useMemo(() => images, [images]);

  useEffect(() => {
    setTransitioning(true);
    setTimeout(() => {
      setVisibleSubItems(memoizedSubItems);
      setTransitioning(false);
    }, 30); 
  }, [memoizedSubItems]);
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
          {memoizedSubItems?.map((item, index) => {
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
        {memoizedImages?.map((image, index) => {
          return <img key={index} src={image} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Dropdown;
