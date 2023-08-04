import React from "react";
import { useFilterContext } from "./context/Filtercontext";
export default function Searchbar() {
  const {filterstate,filterdispatch}=useFilterContext()
  const searchHandler = (e) => {
    filterdispatch({type:"SEARCH_QUERY",payload:e.target.value})
  };

  return (
    <div className="search-bar">
      <div className="parent-input">
        <input
          type="text"
          placeholder="Search for product, brands and more"
          value={filterstate.searchquery}
          onChange={(e) => {
            searchHandler(e);
          }}
        />
      </div>
      <div className="fa-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
