import React from "react";
import "./Hero.css";
import image1 from "../../assets/Dummy/Hero/hero-img-12.jpg";
import image2 from "../../assets/Dummy/Hero/hero-img-111.jpg";
import image3 from "../../assets/Dummy/Hero/hero-img-1.jpg";
import HeroCarouselItem from "../HeroCarousel/HeroCarouselItem";

const slides = [
  {
    id: 0,
    image: image1,
    headertext1: "Available Now",
    headertext2: "SS24 | Teghese Tribe",
    category: ["now"],
  },
  {
    id: 1,
    image: image2,
    headertext1: "The Organic Fleece Capsule",
    headertext2: "SS24 | Teghese Tribe",
    category: ["women"],
  },
  {
    id: 2,
    image: image3,
    headertext1: "Available Now",
    headertext2: "SS24 | Teghese Tribe",
    category: ["men"],
  },
];
const Hero = () => {
  return (
    <>
      <HeroCarouselItem slides={slides} />
    </>
  );
};

export default Hero;
