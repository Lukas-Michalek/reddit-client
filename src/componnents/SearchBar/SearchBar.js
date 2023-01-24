import React from "react";
import "./SearchBar.css";
import searchButton from '../../assets/images/search.svg'

export const SearchBar = () => {
  return (
    <form role="search" className="searchBar">
      <input
        id="search"
        // value=""
        type="search"
        placeholder="Search..."
        autoFocus
        required
      />
      <button type="submit" alt="Submit" >
        <img id="searchButtonImage" src={searchButton} alt="Search" />
      </button>
    </form>
  );
};
