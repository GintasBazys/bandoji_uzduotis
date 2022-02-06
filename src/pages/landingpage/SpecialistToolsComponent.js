import React from "react";
import specialistTools from "./assets/images/specialist-tools.jpg";
import specialistLogo from "./assets/icons/specialist-icon.svg";

const SpecialistTools = () => {
  return (
    <div className="specialist-container">
      <div className="half-width">
        <img
          className="main-image "
          src={specialistTools}
          alt="Specialist tools"
        />
      </div>
      <div className="half-width">
        <div className="tools-container">
          {" "}
          <img
            className="main-image"
            src={specialistLogo}
            alt="Specialist logo"
          />
          <p className="specialist-description">
            Specialist+ prekės ženklas, sukurtas RM Tools komandos, siūlo platų
            statybinių įrankių ir jų priedų pasirinkimą. Prekės ženklas jau
            įvertintas profesionalų ir pamėgtas Baltijos šalyse, sulaukia vis
            daugiau gerbėjų ir Europoje. Specialist+ išskirtinumas: aukšta
            kokybė už sąžiningą kainą. Didelė prekių dalis yra sukurta ir
            pagaminta Europoje. Pabandę Specialist+ gaminius, klientai įvertina
            europinę kokybę už itin gerą kainą ir tampa nuolatiniais pirkėjais.
            Patirkite malonumą dirbdami su Specialist+.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialistTools;
