import React from "react";

const SearchBar = props => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search"
        onKeyDown={props.searchMovies}
        value={props.name}
        className="search-bar"
      />
      <a className="search-btn" href="#" />
      <i class="fas fa-search" />
    </div>
  );
};

export default SearchBar;
