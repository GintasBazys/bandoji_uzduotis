import React from "react";
import rmLogo from "./assets/icons/rmlogo-icon.svg";

const AboutUsComponent = () => {
  return (
    <div>
      <div className="aboutus-container">
        <div className="aboutus-row">
          <div className="aboutus-inner-container">
            <p className="aboutus-heading">Kas mes?</p>
            <p className="aboutus-subheading">
              UAB „RM Tools“ – didmeninė ir mažmeninė prekyba rankiniais ir
              elektriniais įrankiais, skirtais statybos rinkai. Prekiaujame
              Baltijos šalių rinkos poreikius atitinkančiais įrankiais, daug
              dirbame, kad būtume geriausias tiekėjas bei įrankių tiekimo
              partneris parduotuvėms, statybinėms organizacijoms bei meistrams.{" "}
            </p>
          </div>
          <div>
            <img className="rm-icon" src={rmLogo} alt="RM logo" />
          </div>
        </div>
      </div>

      <div className="flex-row-wrap aboutus-facts-container">
        <div className="aboutus-fact-column">
          <div>
            <p className="aboutus-facts">Rinkoje nuo</p>
            <div className="aboutus-line"></div>
          </div>
          <div>
            <div className="flex-row-center">
              <p className="aboutus-year-number">2006</p>
              <p className="aboutus-year-text">m.</p>
            </div>
          </div>
        </div>

        <div className="aboutus-fact-column">
          <div>
            <p className="aboutus-facts">Atstovauja</p>
            <div className="aboutus-line"></div>
          </div>
          <div>
            <div className="flex-row-center">
              <p className="aboutus-year-number">33</p>
              <p className="aboutus-year-text">Prekės ženklus</p>
            </div>
          </div>
        </div>

        <div className="aboutus-fact-column">
          <div>
            <p className="aboutus-facts">Asortimente daugiau kaip</p>
            <div className="aboutus-line"></div>
          </div>
          <div>
            <div className="flex-row-center">
              <p className="aboutus-year-number">8 000</p>
              <p className="aboutus-year-text">produktų</p>
            </div>
          </div>
        </div>

        <div className="aboutus-fact-column">
          <div>
            <p className="aboutus-facts">Atidarytos</p>
            <div className="aboutus-line"></div>
          </div>
          <div>
            <div className="flex-row-center">
              <p className="aboutus-year-number">3</p>
              <p className="aboutus-year-text">
                specializuotos Specialist+ parduotuvės
              </p>
            </div>
          </div>
        </div>

        <div className="aboutus-fact-column">
          <div>
            <p className="aboutus-facts">Sukūrė</p>
            <div className="aboutus-line"></div>
          </div>
          <div>
            <div className="flex-row-center">
              <p className="aboutus-year-number">2014</p>
              <p className="aboutus-year-text">
                m. savo prekės ženklą Specialist+
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
