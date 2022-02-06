import React from "react";
import workerFloor from "./assets/images/worker-floor.jpg";

const FeaturesComponent = () => {
  return (
    <div className="features-introduction-container">
      <div>
        <img className="main-image" src={workerFloor} alt="Worker on floor" />
      </div>
      <div className="relative">
        <div className="features-container">
          <p className="features-heading-text">
            Kodėl verta <br /> dirbti su mumis?
            <div className="flex-row-wrap">
              <div className="feature-column">
                <p className="feature-number">01</p>
                <div className="feature-line"></div>
                <p className="features-header-text">
                  Paprastas užsakymas internetu
                </p>
                <p className="features-paragraph-text">
                  Specialioje B2B internetinėje platformoje lengvai užsisakysite
                  Jums reikalingas prekes
                </p>
              </div>

              <div className="feature-column">
                <p className="feature-number">02</p>
                <div className="feature-line"></div>
                <p className="features-header-text">
                  Operatyvus pristatymo laikas
                </p>
                <p className="features-paragraph-text">
                  Pristatysime prekes vos per 1 d. d. visoje Lietuvoje
                </p>
              </div>

              <div className="feature-column">
                <p className="feature-number">03</p>
                <div className="feature-line"></div>
                <p className="features-header-text">
                  Aukšto lygio aptarnavimas
                </p>
                <p className="features-paragraph-text">
                  Specialiai Jums priskirtas vadybininkas – visada bus
                  pasiruošęs padėtii
                </p>
              </div>

              <div className="feature-column">
                <p className="feature-number">04</p>
                <div className="feature-line"></div>
                <p className="features-header-text">
                  Efektyvus marketinginis palaikymas
                </p>
                <p className="features-paragraph-text">
                  Nuolatos vykdomos įvairios lojalumo kampanijos mūsų klientams
                </p>
              </div>

              <div className="feature-column">
                <p className="feature-number">05</p>
                <div className="feature-line"></div>
                <p className="features-header-text">Lojalumo kampanija</p>
                <p className="features-paragraph-text">
                  Nuolatos vykdomos įvairios lojalumo kampanijos mūsų klientams
                </p>
              </div>

              <div className="feature-column">
                <p className="feature-number">06</p>
                <div className="feature-line"></div>
                <p className="features-header-text">Mokymai</p>
                <p className="features-paragraph-text">
                  Suteikiame naujausią informaciją apie produktus – visada
                  žinosite, mūsų produktų privalumus
                </p>
              </div>
            </div>
          </p>
        </div>

        <button className="contact-us-button">Susisiekti</button>
      </div>
    </div>
  );
};

export default FeaturesComponent;
