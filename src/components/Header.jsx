import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">WatchList</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <Link to="/favorite">Favorite</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Add
              </Link>
            </li>
          </ul>
          <div className="search">
            <input
              className="search__input"
              type="text"
              placeholder="Search for movies by title"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <Link
              to={{
                pathname: "/search",
                state: { query: searchQuery }
              }}
              className="search-btn"
            >
              <i className="fas fa-search"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};