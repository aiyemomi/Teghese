import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <h2>Sign Up</h2>
      <p>Subscribe and stay updated</p>
      <div>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe </button>
      </div>
    </div>
  );
};

export default NewsLetter;
