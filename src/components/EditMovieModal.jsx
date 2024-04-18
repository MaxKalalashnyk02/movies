import React, { useState } from "react";

export const EditMovieModal = ({ movie, onSave, onCancel }) => {
  const [title, setTitle] = useState(movie.title);

  const handleSave = () => {
    onSave({ ...movie, title });
  };

  return (
    <div className="edit-modal">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};
