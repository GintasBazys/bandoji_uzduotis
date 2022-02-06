import React, { useState } from "react";
import heroSlide1 from "./assets/images/hero-slide-1.jpg";
import heroSlide2 from "./assets/images/hero-slide-2.jpg";
import heroSlide3 from "./assets/images/hero-slide-3.jpg";
import heroSlide4 from "./assets/images/hero-slide-4.jpg";
import heroSlide5 from "./assets/images/hero-slide-5.jpg";
import arrowLeft from "./assets/icons/arrow-left.svg";

const IntroductionComponent = () => {
  const [value, setValue] = useState(0);

  const imagesArray = [
    heroSlide1,
    heroSlide2,
    heroSlide3,
    heroSlide4,
    heroSlide5,
  ];

  return (
    <div className="introduction-container">
      <div className="half-width center-container">
        <div className="get-special-offer-container">
          <p className="official-partner-text">
            Garsiausių pasaulyje, statybinių prekės ženklų oficialus partneris
            Lietuvoje!
          </p>
          <p className="become-partner-text">
            Tapkite mūsų partneriu ir gaukite geriausius pasiūlymus.
          </p>
          <button className="special-offer-button">
            Gauti Specialų Pasiūlymą
          </button>
        </div>
      </div>
      <div className="half-width relative">
        <img
          src={imagesArray[value]}
          className="main-image hero-image"
          alt={imagesArray[value]}
        />
        <img
          onClick={() => (value === 0 ? setValue(4) : setValue(value - 1))}
          src={arrowLeft}
          className="arrow-left"
          alt="arrow left"
        />
        <img
          onClick={() => (value === 4 ? setValue(0) : setValue(value + 1))}
          src={arrowLeft}
          className="arrow-right"
          alt="arrow right"
        />
      </div>
    </div>
  );
};

export default IntroductionComponent;
