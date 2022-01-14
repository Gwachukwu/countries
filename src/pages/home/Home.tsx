import React, { ReactElement, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "../country_details/CountryDetails";
import Countries from "./Countries";
import Loading from "../../components/Loading";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { getCountries } from "../../redux/ducks/countries";

const Home = ({ darkMode }: { darkMode: Boolean }): ReactElement => {
  const dispatch = useDispatch();
  const fetchedCountries = useSelector(
    (state: RootStateOrAny) => state.countries.countries
  );
const loading = useSelector((state: RootStateOrAny) => state.countries.loading);


  //const [loading, setLaoding] = useState<Boolean>(true);
  const [allCountries, setAllCountries] = useState<Array<any> | null>(
    null
  );
  const [countries, setCountries] = useState<Object[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  // this gives untouched countries data
  const [resetCountries, setResetCountries] = useState<Array<any> | null>(
    null
  );

  // number of countries per page
  const perPage: number = 12;

  useEffect(() => {
    dispatch(getCountries());
  }, []);

useEffect(() => {
  if (fetchedCountries) {
    setAllCountries(fetchedCountries);
    const slice = fetchedCountries.slice(0, 0 + perPage);
    setCountries(slice);
    setPageCount(Math.ceil(fetchedCountries.length / perPage));
    setResetCountries(fetchedCountries) 
  }
}, [fetchedCountries])

  const handlePageClick = (e: any) => {
    const selectedPage = e.selected;
    const startIndex = selectedPage * perPage;
    const endIndex = selectedPage * perPage + perPage;
    allCountries && setCountries(allCountries.slice(startIndex, endIndex));
  };

  if (loading) {
    return <Loading />;
  }

  if (!allCountries) {
    return (
      <div style={{ width: "100vw", textAlign: "center" }}>
        <p>Error, unable to load countries</p>
      </div>
    );
  }

  return (
    <div>
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
              darkMode={darkMode}
            />
          }
        />
        <Route
          path=":countryCode"
          element={
            <CountryDetails allCountries={allCountries} darkMode={darkMode} />
          }
        />
      </Routes>
    </div>
  );
};

export default Home;
