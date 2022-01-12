import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import Countries from "./Countries";

const Home = (): ReactElement => {
  const [allCountries, setAllCountries] = useState<Object[] | null>(null);
  const [countries, setCountries] = useState<Object[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);

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
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePageClick = (e: any) => {
    const selectedPage = e.selected;
    const offset = selectedPage + 1;
    allCountries && setCountries(allCountries.slice(offset, offset + perPage));
  };

  return (
    <div>
      <nav className="navbar">
        <header>
          <h1>Where in the world?</h1>
        </header>
        <div>
          <h4>Dark Mode</h4>
        </div>
      </nav>
      <Countries
        countries={countries}
        pageCount={pageCount}
        handlePageClick={handlePageClick}
      />
    </div>
  );
};

export default Home;
