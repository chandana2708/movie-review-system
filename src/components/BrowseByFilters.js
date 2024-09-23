import React, { useState } from 'react';

const BrowseByFilters = () => {
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

  const applyFilters = (e) => {
    e.preventDefault();
    // Logic for applying filters goes here
    console.log('Applied Filters:', filters);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Browse by Filters</h2>
      <form className="row g-3">
        {/* Genre */}
        <div className="col-md-4">
          <label className="form-label">Genre</label>
          <select
            className="form-select"
            name="genre"
            value={filters.genre}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Thriller">Thriller</option>
          </select>
        </div>

        {/* Year */}
        <div className="col-md-4">
          <label className="form-label">Year</label>
          <input
            type="number"
            className="form-control"
            name="year"
            placeholder="Enter Year"
            value={filters.year}
            onChange={handleFilterChange}
          />
        </div>

        {/* Language */}
        <div className="col-md-4">
          <label className="form-label">Language</label>
          <select
            className="form-select"
            name="language"
            value={filters.language}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>

        {/* Rating */}
        <div className="col-md-4">
          <label className="form-label">Rating</label>
          <select
            className="form-select"
            name="rating"
            value={filters.rating}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars & above</option>
            <option value="3">3 Stars & above</option>
            <option value="2">2 Stars & above</option>
          </select>
        </div>

        {/* Popularity */}
        <div className="col-md-4">
          <label className="form-label">Popularity</label>
          <select
            className="form-select"
            name="popularity"
            value={filters.popularity}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Most Popular">Most Popular</option>
            <option value="Least Popular">Least Popular</option>
          </select>
        </div>

        {/* Apply Filters Button */}
        <div className="col-12 d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary btn-lg mt-3"
            onClick={applyFilters}
          >
            Apply Filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrowseByFilters;
