import React from "react";
import "./CustomerFeedbackCard.css";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CustomerFeedbackCard = ({ name, title, description, item }) => {
  return (
    <div className="customer-feedback-card">
      <div className="customer-feedback-card-name">
        {name} <CheckCircleIcon style={{ color: "green", fontSize: 9 }} />{" "}
        Verified buyer
      </div>
      <div className="star-ratings">
        <StarIcon style={{ color: "#DC5F00", fontSize: 18 }} />
        <StarIcon style={{ color: "#DC5F00", fontSize: 18 }} />
        <StarIcon style={{ color: "#DC5F00", fontSize: 18 }} />
        <StarIcon style={{ color: "#DC5F00", fontSize: 18 }} />
        <StarIcon style={{ color: "#DC5F00", fontSize: 18 }} />
      </div>
      <div className="feedback-title">{title}</div>
      <div className="feedback-description">{description}</div>
      <div className="feedback-item">
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
      </div>
    </div>
  );
};

export default CustomerFeedbackCard;
