import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import "./HeroCarouselItem.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const HeroCarouselItem = ({ slides = [] }) => {
  const [circleIndex, setCircleIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const intervalRef = useRef(null);
  const currentSlide = slides[circleIndex] || {};
  const arrowStyles = {
    fontSize: 20,
    opacity: 0.8,
  };
  useEffect(() => {
    const preloadImages = () => {
      slides.forEach((slide) => {
        const img = new Image();
        img.src = slide.image;
        img.onload = handleImageLoad;
      });
    };

    preloadImages();
  }, [slides]);

  const startTimer = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCircleIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
      setImageLoaded(false);
    }, 5000);
  }, [slides]);

  const resetTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    startTimer();
  }, [startTimer]);

  const handleImageLoad = () => {
    const imagesLoaded = slides.every((slide) => {
      return new Image().src === slide.image;
    });
    if (imagesLoaded) {
      setImageLoaded(true);
    }
  };

  const handleCircleClick = useCallback(
    (index) => {
      setCircleIndex(index);
      resetTimer();
      setImageLoaded(false);
    },
    [resetTimer]
  );

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, [startTimer]);

  return (
    <div>
      <div className="hero">
        <div className="hero-shop">
          <div className="hero-image-container">
            <span
              className="left-arrow"
              onClick={() => {
                setCircleIndex((prev) => {
                  return prev > 0 ? prev - 1 : slides.length - 1;
                });
                resetTimer();
                setImageLoaded(false);
              }}
            >
              <ArrowBackIosIcon style={arrowStyles} />
            </span>
            <span
              className="right-arrow"
              onClick={() => {
                setCircleIndex((prev) => {
                  return prev < slides.length - 1 ? prev + 1 : 0;
                });
                resetTimer();
                setImageLoaded(false);
              }}
            >
              <ArrowForwardIosIcon style={arrowStyles} />
            </span>
            <div
              className="image-wrapper"
              style={{ transform: `translateX(-${circleIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <img
                  key={index}
                  className={`image ${imageLoaded ? "loaded" : ""}`}
                  src={slide.image}
                  alt="hero-slide"
                  onLoad={handleImageLoad}
                />
              ))}
            </div>

            <div className="black-overlay"></div>
            <div className="circle-container">
              {slides.map((slide, index) => {
                return (
                  <div
                    key={index}
                    className={"circle"}
                    onClick={() => {
                      handleCircleClick(index);
                    }}
                    style={{ opacity: index === circleIndex && 1 }}
                  ></div>
                );
              })}
            </div>
          </div>

          <div className="hero-content">
            <h2>{currentSlide.headertext1}</h2>
            <h1>{currentSlide.headertext2}</h1>
            <div className="shop-btns">
              {currentSlide.category.map((e, index) => {
                return (
                  <button className="hero-shop-btn" key={index}>
                    <Link className="hero-btn-link" to={`/${e}`}>
                      SHOP {e}
                    </Link>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarouselItem;
