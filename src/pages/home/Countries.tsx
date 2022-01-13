import React, { ReactElement } from "react";
import ReactPaginate from "react-paginate";
import CountryCard from "../../components/CountryCard";
import * as GoIcons from "react-icons/go";

type CountriesProps = {
  countries: Array<any>;
  setCountries:(event: any)=> void;
  allCountries: Array<any> | null;
  setAllCountries: (event: any) => void;
  pageCount: number;
  handlePageClick: (event: any) => void;
  setPageCount: (event: any) => void;
  perPage: number;
  resetCountries: Array<any> | null;
};

const Countries = ({
  countries,
  allCountries,
  setAllCountries,
  pageCount,
  handlePageClick,
  setCountries,
  setPageCount,
  perPage,
  resetCountries
}: CountriesProps): ReactElement => {

  const handleRegionChange = (e: any) => {
    const { value } = e.target;
    console.log(value);
    
    if (value && resetCountries) {
      const filtered = resetCountries.filter((country) => country.region === value);
      setAllCountries(filtered);
      const slice = filtered.slice(0, 0 + perPage);
        setCountries(slice);
        setPageCount(Math.ceil(filtered.length / perPage));
    } else {
      // if no selection return all
      setAllCountries(resetCountries);
     if(resetCountries){
      const slice = resetCountries.slice(0, 0 + perPage);
      setCountries(slice);
      setPageCount(Math.ceil(resetCountries.length / perPage));
     } 
    }
    
  };

  return (
    <main className="countries-container">
      <div className="forms">
        <div className="forms_search">
          <GoIcons.GoSearch />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search for a country..."
          />
        </div>
        <div>
          <select name="" id="" onChange={handleRegionChange}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="countries">
        {countries &&
          countries.map((country: Object, index) => (
            <CountryCard key={index} country={country} />
          ))}
      </div>
      <div className="pagination-container">
        <ReactPaginate
          previousLabel={"←"}
          nextLabel={"→"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </main>
  );
};

export default Countries;
