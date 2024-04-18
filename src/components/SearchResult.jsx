import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ResultCard } from './ResultCard';

const SearchResults = () => {
  const location = useLocation();
  const [query, setQuery] = useState(location.state.query);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/search?query=${query}`);
        const data = await response.json();
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={handleInputChange}
            />
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
