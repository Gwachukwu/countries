import React, { ReactElement } from "react";

type CountryType = {
  [key: string]: any;
};

const CountryCard = ({ country }: { country: CountryType }): ReactElement => {
  return (
    <div className="card">
      <div className="card_image-container">
        <img src={country.flag} alt={country.name + "flag"} className="card_image"/>
      </div>
     <div className="card_details">
     <h3>{country.name}</h3>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
     </div>
    </div>
  );
};

export default CountryCard;
