import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/movies').then((response) => {
      setMovies(response.data);
      setFilteredMovies(response.data);  // Set as default when no filters applied
    });
  }, []);

  const applyFilters = (filters) => {
    let filtered = movies;

    if (filters.genre) {
      filtered = filtered.filter(movie => movie.genre === filters.genre);
    }

    if (filters.year) {
      filtered = filtered.filter(movie => new Date(movie.release_date).getFullYear() === parseInt(filters.year));
    }

    if (filters.language) {
      filtered = filtered.filter(movie => movie.language === filters.language);
    }

    if (filters.rating) {
      filtered = filtered.filter(movie => movie.rating_average >= parseFloat(filters.rating));
    }

    if (filters.popularity === 'Most Popular') {
      filtered = filtered.sort((a, b) => b.popularity - a.popularity);
    } else if (filters.popularity === 'Least Popular') {
      filtered = filtered.sort((a, b) => a.popularity - b.popularity);
    }

    setFilteredMovies(filtered);
  };

  return (
    <div>
      <h1>Browse Movies</h1>
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
