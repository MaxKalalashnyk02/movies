import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
    addToFavorites,
    removeFromFavorites,
    editMovieTitle,
  } = useContext(GlobalContext);

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(movie.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editMovieTitle(movie.id, newTitle);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewTitle(movie.title);
  };

  return (
    <div className="inner-card-controls">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button className="ctrl-btn" onClick={handleSave}>
            Save
          </button>
          <button className="ctrl-btn" onClick={handleCancelEdit}>
            Cancel
          </button>
        </>
      ) : (
        <>
          {type === "watchlist" && (
            <>
              <button
                className="ctrl-btn"
                onClick={() => addMovieToWatched(movie)}
              >
                <i className="fa-fw far fa-eye"></i>
              </button>

              <button
                className="ctrl-btn"
                onClick={() => removeMovieFromWatchlist(movie.id)}
              >
                <i className="fa-fw fa fa-times"></i>
              </button>
            </>
          )}

          {type === "watched" && (
            <>
              <button
                className="ctrl-btn"
                onClick={() => moveToWatchlist(movie)}
              >
                <i className="fa-fw far fa-eye-slash"></i>
              </button>

              <button
                className="ctrl-btn"
                onClick={() => removeFromWatched(movie.id)}
              >
                <i className="fa-fw fa fa-times"></i>
              </button>
            </>
          )}

          {type === "favorite" && (
            <>
              <button
                className="ctrl-btn"
                onClick={() => addToFavorites(movie)}
              >
                <i className="fa-fw far fa-heart"></i>
              </button>

              <button
                className="ctrl-btn"
                onClick={() => removeFromFavorites(movie.id)}
              >
                <i className="fa-fw fa fa-heart"></i>
              </button>
            </>
          )}

          <button className="ctrl-btn" onClick={handleEdit}>
            <i className="fa-fw far fa-pen"></i>
          </button>
        </>
      )}
    </div>
  );
};
