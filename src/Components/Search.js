import React from "react";
import { debounce } from "lodash";

const Search = ({ searchTerm }) => {
  const handleSearch = debounce((event) => {
    searchTerm(event.target.value);
  }, 1500);

  return (
    <div className="search">
      <input onChange={handleSearch} placeholder="Enter Location" type="text" />
    </div>
  );
};

export default Search;
