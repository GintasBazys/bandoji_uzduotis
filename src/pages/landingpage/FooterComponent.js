import React from "react";
import location from "./assets/icons/location.svg";
import phone from "./assets/icons/phone.svg";
import email from "./assets/icons/email.svg";
import web from "./assets/icons/web.svg";

const FooterComponent = () => {
  return (
    <div className="background-dark">
      <p className="footer-centered-text">
        Turite klausimų? <br /> Susisiekite su mumis
      </p>
      <div className="footer-information">
        <div className="flex-row">
          <img src={location} alt="location" />
          <p className="footer-text">Kalvarijų g. 143-16, LT-08352 Vilnius</p>
        </div>
        <div className="flex-row">
          <img src={phone} alt="phone" />
          <p className="footer-text">+370 5 21 69999</p>
        </div>
        <div className="flex-row">
          <img src={email} alt="email" />
          <p className="footer-text">info@specialist.lt</p>
        </div>
        <div className="flex-row">
          <img src={web} alt="web" />
          <p className="footer-text">specialist.lt</p>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
