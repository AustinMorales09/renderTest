import React, { useState } from 'react';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Hamburger Icon */}
        <div className={`hamburger-icon ${sidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Logo */}
        <div className="logo">
          <h2>Your Logo</h2>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>

        {/* Account Button */}
        <div className="account-button">
          <button>Account</button>
        </div>

        {/* Cart Icon */}
        <div className="cart-icon">
          <span role="img" aria-label="cart">🛒</span>
        </div>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-content">
            <button onClick={toggleSidebar} className="close-btn">&times;</button>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
