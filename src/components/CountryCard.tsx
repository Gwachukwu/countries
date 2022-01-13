import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

type CountryType = {
  [key: string]: any;
};

const CountryCard = ({ country }: { country: CountryType }): ReactElement => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/${country.alpha3Code}`)}>
      <div className="card_image-container">
        <img
          src={country.flag}
          alt={country.name + " " + "flag"}
          className="card_image"
        />
      </div>
      <div className="card_details">
        <h3>{country.name}</h3>
        <p>
          <span className="card_details__title">Population:</span>{" "}
          {country.population}
        </p>
        <p>
          <span className="card_details__title">Region:</span> {country.region}
        </p>
        <p>
          <span className="card_details__title">Capital:</span>{" "}
          {country.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
