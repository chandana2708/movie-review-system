import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Year: {new Date(movie.release_date).getFullYear()}</p>
      <p>Rating: {movie.rating_average}</p>
      <p>Popularity: {movie.popularity}</p>
    </div>
  );
};

export default MovieCard;
