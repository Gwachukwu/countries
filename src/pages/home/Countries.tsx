import React, { ReactElement } from "react";
import ReactPaginate from "react-paginate";
import CountryCard from "../../components/CountryCard";

type CountriesProps = {
  countries: Object[];
  pageCount: number;
  handlePageClick: (event: any) => void;
};

const Countries = ({
  countries,
  pageCount,
  handlePageClick,
}: CountriesProps): ReactElement => {
  return (
    <>
      <div className="countries">
        {countries &&
          countries.map((country: Object, index) => (
            <CountryCard key={index} country={country} />
          ))}
      </div>
      <div className="pagination-container">
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </>
  );
};

export default Countries;
