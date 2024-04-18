import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const MovieDetails = ({ movie }) => {
  const { addToFavorites, removeFromFavorites } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="movie-details">
          <h2>{movie.title}</h2>
          <img src={movie.image} alt={movie.title} />
          <p>Description: {movie.description}</p>
          <p>Rating: {movie.rating}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Genre: {movie.genre.join(', ')}</p>
          <p>Actors: {movie.actors.join(', ')}</p>
          <p>Director: {movie.director}</p>
          <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
          <button onClick={() => removeFromFavorites(movie.id)}>Remove from Favorites</button>
        </div>
     </div>
    </div>
  );
};

export default MovieDetails;
