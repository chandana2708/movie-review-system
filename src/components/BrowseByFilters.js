import React, { useState } from 'react';

const BrowseByFilters = ({ applyFilters }) => {
  const [filters, setFilters] = useState({
    genre: '',
    year: '',
    language: '',
    rating: '',
    popularity: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyFilters(filters);  // Call the parent function to filter the movie list
  };

  return (
    <div className="browse-by-filters">
      <form onSubmit={handleSubmit}>
        <label>
          Genre:
          <select name="genre" value={filters.genre} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
          </select>
        </label>

        <label>
          Year of Release:
          <input
            type="number"
            name="year"
            placeholder="Enter Year"
            value={filters.year}
            onChange={handleFilterChange}
          />
        </label>

        <label>
          Language:
          <select name="language" value={filters.language} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </label>

        <label>
          Rating:
          <select name="rating" value={filters.rating} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars & above</option>
          </select>
        </label>

        <label>
          Popularity:
          <select name="popularity" value={filters.popularity} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Most Popular">Most Popular</option>
            <option value="Least Popular">Least Popular</option>
          </select>
        </label>

        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default BrowseByFilters;
