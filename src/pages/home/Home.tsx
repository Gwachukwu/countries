import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "../country_details/CountryDetails";
import Countries from "./Countries";
import * as BsIcons from "react-icons/bs";

const Home = (): ReactElement => {
  const [allCountries, setAllCountries] = useState<Array<any> | null>(null);
  const [countries, setCountries] = useState<Object[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  // this gives untouched countries data
 const [resetCountries,setResetCountries] = useState<Array<any> | null>(null);

  // number of countries per page
  const perPage: number = 12;

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        const data = res.data;
        setAllCountries(data);
        const slice = data.slice(0, 0 + perPage);
        setCountries(slice);
        setPageCount(Math.ceil(data.length / perPage));
        setResetCountries(data)
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePageClick = (e: any) => {
    const selectedPage = e.selected;
    const startIndex = selectedPage * perPage;
    const endIndex = selectedPage * perPage + perPage;
    allCountries && setCountries(allCountries.slice(startIndex, endIndex));
  };

  return (
    <div>
      <nav className="navbar">
        <header>
          <h1>Where in the world?</h1>
        </header>
        <div>
          <h4><BsIcons.BsMoon className="mode-icon"/> Dark Mode</h4>
        </div>
      </nav>
      <Routes>
        <Route
          path=""
          element={
            <Countries
              countries={countries}
              setCountries={setCountries}
              setPageCount={setPageCount}
              pageCount={pageCount}
              setAllCountries={setAllCountries}
              allCountries={allCountries}
              handlePageClick={handlePageClick}
              perPage={perPage}
              resetCountries={resetCountries}
            />
          }
        />
        <Route
          path=":countryCode"
          element={<CountryDetails allCountries={allCountries} />}
        />
      </Routes>
    </div>
  );
};

export default Home;
