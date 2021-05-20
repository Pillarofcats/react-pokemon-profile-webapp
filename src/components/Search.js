import React from "react";
import "./Search.css";

const Search = ({searchingOnChange}) => {

  return (
    <div>
      <input type="search" id="search" onChange={searchingOnChange} />
    </div>
  );
};

export default Search;