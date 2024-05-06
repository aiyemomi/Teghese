import React, { useRef, useState } from "react";
import "./CustomerFeedback.css";
import CustomerFeedbackCard from "../CustomerFeedbackCard/CustomerFeedbackCard";
import { all_product } from "../../Assets/Dummy/data";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const customers = [
  {
    name: "Samantha",
    title: "So flattering",
    description: "Very comfortable. Wonderful, fit, lovely fabric",
    item: all_product[0],
  },
  {
    name: "Aziki Y.",
    title: "Nice fit",
    description: "Brilliant, just brilliant",
    item: all_product[2],
  },
  {
    name: "Rere",
    title: "So flattering",
    description: "Amazing piece nkjqnskq sqksmkqsmkq",
    item: all_product[1],
  },
  {
    name: "Ruru",
    title: "So chill",
    description: "Brilliant, just brilliant",
    item: all_product[4],
  },
  {
    name: "Michael",
    title: "So chill",
    description: "The bestest",
    item: all_product[0],
  },
];
const CustomerFeedback = () => {
  const [transitionDirection, setTransitionDirection] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? customers.length - 1 : prevIndex - 1
    );
    setTransitionDirection("next");
  };

  const handleClickPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % customers.length);
    setTransitionDirection("previous");
  };
  const getIndicesToShow = () => {
    const firstIndex =
      currentIndex === 0 ? customers.length - 1 : currentIndex - 1;
    const secondIndex = currentIndex;
    const thirdIndex = (currentIndex + 1) % customers.length;
    return [firstIndex, secondIndex, thirdIndex];
  };
  return (
    <div className="customer-feedback">
      <h1 className="customer-feedback-heading">We love Teghese</h1>
      <h2 className="customer-feedback-heading2">
        see what our customers are saying
      </h2>
      <div className="customer-feedback-cards">
        <div className={` carousel slide-${transitionDirection}`}>
          {getIndicesToShow().map((index) => (
            <CustomerFeedbackCard
              key={index}
              name={customers[index].name}
              title={customers[index].title}
              description={customers[index].description}
              item={customers[index].item}
            />
          ))}
        </div>

        <div className="fade-in-effect"></div>
        <div className="fade-out-effect"></div>
      </div>
      <span className="feedback-left-arrow" onClick={handleClickNext}>
        <ArrowCircleLeftIcon />
      </span>
      <span className="feedback-right-arrow" onClick={handleClickPrevious}>
        <ArrowCircleRightIcon />
      </span>
    </div>
  );
};

export default CustomerFeedback;
