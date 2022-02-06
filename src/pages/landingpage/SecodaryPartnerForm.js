import React from "react";

const SecodaryPartnerForm = () => {
  return (
    <div className="background-blue secondary-container">
      <div className="secondary-form">
        <p className="become-partner-form-text">Tapkite mūsų partneriu</p>
        <p className="become-partner-subtext">
          Mes žinome kaip padėti Jūsų verslui ir pateiksime geriausius
          pasiūlymus, skirtus būtent Jums
        </p>

        <form>
          <div className="secondary-form-container">
            <div className="flex-column-secondary-form">
              <label for="First_Name-secondary">Vardas</label>
              <input
                name="first_name-secondary"
                id="First_Name-secondary"
                type="text"
                placeholder="Vardenis"
              />
            </div>

            <div className="flex-column-secondary-form">
              <label for="Last_Name-secondary">Pavardė</label>
              <input
                name="last_name-secondary"
                id="Last_Name-secondary"
                type="text"
                placeholder="Pavardenis"
              />
            </div>

            <div className="flex-column-secondary-form">
              <label for="Company_name-secondary">Įmonės pavadinimas</label>
              <input
                name="company_name-secondary"
                id="Company_name-secondary"
                type="text"
                placeholder="Lorem ipsum"
              />
            </div>

            <div className="flex-column-secondary-form">
              <label for="Email_Address-secondary">El. paštas</label>
              <input
                name="email_addres-secondarys"
                id="Email_Address-secondary"
                type="email"
                placeholder="Lorem ipsum"
              />
            </div>

            <div className="flex-column-secondary-form">
              <label for="Phone_Number-secondary">Tel. numeris</label>
              <input
                name="phone_number-secondary"
                id="Phone_Number-secondary"
                type="tel"
                placeholder="Lorem ipsum"
              />
            </div>
            <div className="flex-column">
              <label>Pasirinkite sritį:</label>
              <div className="flex-row-wrap secondary-form-select">
                <div className="radiobtn">
                  <input
                    type="radio"
                    id="radio1-secondary"
                    name="radio1"
                    value="radio1-secondary"
                  />
                  <label for="radio1-secondary">Gamybos įmonė</label>
                </div>
                <div className="radiobtn">
                  <input
                    type="radio"
                    id="radio2-secondary"
                    name="radio1"
                    value="radio2-secondary"
                    defaultChecked={true}
                  />
                  <label for="radio2-secondary">Mažmeninė įmonė</label>
                </div>
                <div className="radiobtn">
                  <input
                    type="radio"
                    id="radio3-secondary"
                    name="radio1"
                    value="radio3-secondary"
                  />
                  <label for="radio3-secondary">Statybos įmonė</label>
                </div>

                <div className="radiobtn">
                  <input
                    type="radio"
                    id="radio4-secondary"
                    name="radio1"
                    value="radio4-secondary"
                  />
                  <label for="radio4-secondary">Projektinė veikla</label>
                </div>
              </div>
            </div>
          </div>
          <div className="secondary-form-checkbox">
            <input type="checkbox" id="checkbox2" name="checkbox2" />
            <label for="checkbox2">
              *Sutinkate su privatumo politika ir naujienlaiškių užsakymu
            </label>
          </div>
        </form>
        <button className="special-offer-button form-button center">
          Gauti Specialų Pasiūlymą
        </button>
      </div>
    </div>
  );
};

export default SecodaryPartnerForm;
