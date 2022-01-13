import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as BiIcons from "react-icons/bi";

const CountryDetails = ({
  allCountries,
}: {
  allCountries: Array<any> | null;
}) => {
    const navigate = useNavigate();
  const { countryCode } = useParams();

  const country = allCountries
    ? allCountries.filter((item) => item.alpha3Code === countryCode)[0]
    : null;

  return country ? (
    <>
        <button onClick={() =>navigate("/")} className="back-button">
          <BiIcons.BiArrowBack className="back-button_icon"/>
          Back
        </button>
      <div className="details">
        <div className="details_img_container">
          <img
            src={country.flag}
            alt={country.name + " " + "flag"}
            className="details_img"
          />
        </div>
        <div>
          <h3>{country.name}</h3>
          <p>
            <span className="card_details__title">Population:</span>{" "}
            {country.population}
          </p>
          <p>
            <span className="card_details__title">Region:</span>{" "}
            {country.region}
          </p>
          <p>
            <span className="card_details__title">Capital:</span>{" "}
            {country.capital}
          </p>
          <p>
            <span className="card_details__title">Languages:</span>{" "}
            {country.languages.map((language: any) => language.name + ", ")}
          </p>
          <p>
            <span className="card_details__title">Demonym:</span>{" "}
            {country.demonym}
          </p>
          <p>
            <span className="card_details__title">Timezones:</span>{" "}
            {country.timezones.map((timezone: any) => timezone + ", ")}
          </p>
        </div>
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default CountryDetails;
