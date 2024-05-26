import React, { useState, useEffect, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import "./ShopCatDropdownTitle.css";
import ShopCatDropdownContent from "../ShopCatDropdownContent/ShopCatDropdownContent";
const initialItems = [
  {
    title: "Sort",
    subTitles: ["Recommended", "Price low to high", "Price high to low"],
    selectedSubtitles: [],
  },
  {
    title: "Color",
    subTitles: ["White", "Black", "Red", "Blue"],
    selectedSubtitles: [],
  },
  {
    title: "Category",
    subTitles: ["Top", "Cargo pants"],
    selectedSubtitles: [],
  },
  {
    title: "Size",
    subTitles: ["XS", "S", "M", "L", "XL"],
    selectedSubtitles: [],
  },
];
const ShopCatDropdownTitle = ({ text }) => {
  const [items, setItems] = useState(initialItems);
  const [isOpen, setIsOpen] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropDown = (index) => {
    setIsOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleSubtitleClick = (itemIndex, subtitle) => {
    const updatedItems = [...items];
    if (updatedItems[itemIndex].title === "Sort") {
      updatedItems[itemIndex].selectedSubtitle = subtitle;
    } else {
      const selectedSubtitles = updatedItems[itemIndex].selectedSubtitles;
      if (!selectedSubtitles.includes(subtitle)) {
        selectedSubtitles.push(subtitle);
      } else {
        selectedSubtitles.splice(selectedSubtitles.indexOf(subtitle), 1);
      }
    }
    setItems(updatedItems);
  };

  const handleClearSelection = (itemIndex) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex].selectedSubtitles = [];
      return updatedItems;
    });
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(null);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="shop-cat-titles" ref={dropdownRef}>
        {items.map((item, index) => {
          const numOfSelectedSubtitles = item.selectedSubtitles
            ? item.selectedSubtitles.length
            : 0;
          return (
            <div key={index} className="shop-cat-title-container">
              <div
                className={"shopcat-title-icon"}
                onClick={() => toggleDropDown(index)}
              >
                <div className="shop-cat-dropdown-title ">{item.title}</div>
                <span className="shop-cat-title-icon">
                  {isOpen !== index ? (
                    <KeyboardArrowDownIcon style={{ fontSize: 18 }} />
                  ) : (
                    <KeyboardArrowUpIcon style={{ fontSize: 18 }} />
                  )}
                </span>
              </div>
              <ShopCatDropdownContent
                filterType={item.title}
                isOpen={isOpen === index}
                subtitles={item.subTitles}
                onSubtitleClick={(subtitle) =>
                  handleSubtitleClick(index, subtitle)
                }
                selectedSubtitle={item.selectedSubtitle}
                selectedSubtitles={item.selectedSubtitles}
                numOfSelectedSubtitles={numOfSelectedSubtitles}
                toggleDropdown={toggleDropDown}
                clearSelection={() => {
                  handleClearSelection(index);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopCatDropdownTitle;
