import React from "react";
import worker from "./assets/images/worker.jpg";

const PartnerComponent = () => {
  return (
    <div className="introduction-container">
      <div className="half-width background-blue">
        <div className="partner-form-container center-container">
          <p className="become-partner-form-text">Tapkite mūsų partneriu</p>
          <p className="become-partner-subtext">
            Mes žinome kaip padėti Jūsų verslui ir pateiksime geriausius
            pasiūlymus, skirtus būtent Jums
          </p>
          <form className="partner-form">
            <div className="flex-partner-row">
              <div className="partner-form-inner">
                <label for="First_Name">Vardas</label>
                <input
                  name="first_name"
                  id="First_Name"
                  type="text"
                  placeholder="Vardenis"
                />
              </div>
              <div className="flex-column half-width">
                <label for="Last_Name">Pavardė</label>
                <input
                  name="last_name"
                  id="Last_Name"
                  type="text"
                  placeholder="Pavardenis"
                />
              </div>
            </div>

            <div className="flex-column">
              <label for="Company_name">Įmonės pavadinimas</label>
              <input
                name="company_name"
                id="Company_name"
                type="text"
                placeholder="Lorem ipsum"
              />
            </div>

            <div className="flex-column">
              <label for="Email_Address">El. paštas</label>
              <input
                name="email_address"
                id="Email_Address"
                type="email"
                placeholder="Lorem ipsum"
              />
            </div>

            <div className="flex-column">
              <label for="Phone_Number">Tel. numeris</label>
              <input
                name="phone_number"
                id="Phone_Number"
                type="tel"
                placeholder="Lorem ipsum"
              />
            </div>
            <label>Pasirinkite sritį:</label>
            <div className="flex-row-wrap">
              <div className="radiobtn">
                <input type="radio" id="radio1" name="radio" value="radio1" />
                <label for="radio1">Gamybos įmonė</label>
              </div>
              <div className="radiobtn">
                <input
                  type="radio"
                  id="radio2"
                  name="radio"
                  value="radio2"
                  defaultChecked={true}
                />
                <label for="radio2">Mažmeninė įmonė</label>
              </div>
              <div className="radiobtn">
                <input type="radio" id="radio3" name="radio" value="radio3" />
                <label for="radio3">Statybos įmonė</label>
              </div>

              <div className="radiobtn">
                <input type="radio" id="radio4" name="radio" value="radio4" />
                <label for="radio4">Projektinė veikla</label>
              </div>
            </div>
            <div className="primary-form-checkbox">
              <input type="checkbox" id="checkbox1" name="checkbox1" />
              <label for="checkbox">
                *Sutinkate su privatumo politika ir naujienlaiškių užsakymu
              </label>
            </div>
            <button
              onClick={(event) => event.preventDefault()}
              className="special-offer-button"
            >
              Gauti Specialų Pasiūlymą
            </button>
          </form>
        </div>
      </div>
      <div className="half-width">
        <img className="main-image image-height" src={worker} alt="Worker" />
      </div>
    </div>
  );
};

export default PartnerComponent;
