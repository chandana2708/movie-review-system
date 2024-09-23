import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you're using Link from react-router-dom
import LoginModal from './LoginModal'; // Import the modal component

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal); // Toggle modal visibility
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Use Link to navigate to the home page */}
          <Link className="navbar-brand" to="/">FilmCritic</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Use Link for the Home navigation */}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/watchlist">Watchlist</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/films">Films</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              {/* Use button to trigger modal */}
              <button 
                type="button" 
                className="btn btn-outline-success" 
                onClick={toggleModal} // Open modal when button is clicked
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Render the Login/Signup Modal */}
      <LoginModal show={showModal} onClose={toggleModal} />
    </>
  );
};

export default Navbar;
