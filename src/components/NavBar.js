import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrowseByFilters from './BrowseByFilters';

const Navbar = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><button onClick={toggleFilters}>Films</button></li> {/* Films button */}
        <li><Link to="/watchlist">Watchlist</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      {showFilters && <BrowseByFilters />} {/* Conditionally render filters */}
    </nav>
  );
};

export default Navbar;
