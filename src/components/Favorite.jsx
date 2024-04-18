import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ResultCard } from './ResultCard';

const Favorite = () => {
  const { favorites, removeFromFavorites } = useContext(GlobalContext);

  return (
    <div className='movie-page'>
      <div className="container">
        <div className="header">
          <h1 className='heading'>Favorites</h1>
          <span className="count-pill">
            {favorites.length} {favorites.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {favorites.length > 0 ? (
        <ul>
          {favorites.map((movie) => (
            <li key={movie.id}>
              <ResultCard movie={movie} />
              <button onClick={() => removeFromFavorites(movie.id)}>Remove</button>
            </li>
          ))}
        </ul>
        ) : (
          <h2 className="no-movies">No favorite movies yet.</h2>
        )}
      </div>
    </div>
  );
};

export default Favorite;
