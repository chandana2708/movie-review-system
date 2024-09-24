import React, { useState } from 'react';
import Navbar from './Navbar'; // Adjust the import path as needed
import LoginModal from './LoginModal'; // Adjust the import path as needed

const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClose = () => setShowLoginModal(false);

  return (
    <div>
      <Navbar setShowLoginModal={setShowLoginModal} />
      
      <LoginModal show={showLoginModal} handleClose={handleLoginClose} />
      
      {/* Other components like Home, BrowseByFilters, etc. can go here */}
    </div>
  );
};

export default App;