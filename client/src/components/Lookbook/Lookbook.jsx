import React from "react";
import "./Lookbook.css";
import img_1 from "../../assets/Dummy/Hero/nav-img-woman2.jpg";
import img_2 from "../../assets/Dummy/Hero/nav-img-woman2.jpg";
import Button from "../Common/Button/Button";

const buttonStyles = {
  marginBottom: "40px",
  // margin: "inherit",
};
const Lookbook = () => {
  return (
    <div className="lookbook">
      <div className="lookbook-description">
        <h1>The reset lookbook</h1>
        <h2>STH HEM SUMMER / NTH HEM WINTER</h2>
        <h3>
          "This drop was founded on the idea of taking a step back, exploring
          creativity, fostering ideas and going for it. Embrace this season as
          an opportunity to transform each step of your journey."
        </h3>
      </div>
      <div className="lookbook-main">
        <div className="lookbook-section1">
          <img src={img_1} alt="section-1-img1" />
        </div>
        <div className="lookbook-section2">
          <h1>Progress with Purpose</h1>
          <p>
            Our lookbook is a visual narrative of steady evolution, showcasing
            versatile pieces that effortlessly adapt to various facets of life.
            We invite you to explore a collection that celebrates the seamless
            blend of contemporary style and purposeful progress
          </p>
          <Button styles={buttonStyles} text="Explore" />
          <img src={img_2} alt="section-1-img2" />
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
