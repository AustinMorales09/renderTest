// App.js
import React from 'react';
import Navbar from './SideNavbar'; // Make sure the path is correct
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ padding: '100px' }}>
        <h1>Main Content</h1>
        <p>Click the hamburger icon to open the side navigation bar.</p>
        <h1>Main Content</h1>
        <p>Click the hamburger icon to open the side navigation bar.</p>
        <h1>Main Content</h1>
        <p>Click the hamburger icon to open the side navigation bar.</p>
        <h1>Main Content</h1>
        <p>Click the hamburger icon to open the side navigation bar.</p>
        <h1>Main Content</h1>
        <p>Click the hamburger icon to open the side navigation bar.</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
