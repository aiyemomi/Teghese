import React, { useState, useEffect, useRef } from "react";
import "./ShopCatDropdownContent.css";
const ShopCatDropdownContent = ({
  clearSelection,
  subtitles,
  isOpen,
  filterType,
  selectedSubtitles,
  selectedSubtitle,
  numOfSelectedSubtitles,
  onSubtitleClick,
}) => {
  const [selectedSubtitleIndices, setSelectedSubtitleIndices] = useState([]);
  const toggleSubtitleSelection = (index) => {
    setSelectedSubtitleIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };
  return (
    <div
      className={`shopcat-title-dropdown-content ${
        isOpen ? "dropdown-open" : ""
      }`}
    >
      {filterType !== "Sort" && (
        <div className="filter-info">
          <span>
            <p>{numOfSelectedSubtitles} selected</p>

            {selectedSubtitles && <p>{selectedSubtitles.join(", ")}</p>}
          </span>

          <button
            onClick={() => {
              clearSelection();
              setSelectedSubtitleIndices([]);
            }}
          >
            Clear
          </button>
        </div>
      )}

      <ul>
        {subtitles.map((subtitle, index) => (
          <li
            className={
              filterType === "Sort"
                ? selectedSubtitle === subtitle
                  ? "subtitle-selected"
                  : ""
                : selectedSubtitleIndices.includes(index)
                ? "subtitle-selected"
                : ""
            }
            onClick={(e) => {
              toggleSubtitleSelection(index);
              e.preventDefault();
              onSubtitleClick(subtitle);
            }}
            key={index}
          >
            {subtitle}
            {filterType === "Color" && (
              <span
                style={{
                  backgroundColor: subtitle.toLowerCase(),
                  height: 10,
                  width: 10,
                  display: "inline-block",
                  border: "1px solid",
                }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopCatDropdownContent;
