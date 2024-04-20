import React from 'react';
import '../css/navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="left-menu">
        <ul>
          <li><a href="home">Home</a></li>
          <li><a href="browse">Browse</a></li> {/* * */}
          <li><a href="profile">Profile</a></li>
        </ul>
      </div>
      <div className="right-menu">
        <ul>
        <li><a href="login">LogIn</a></li>
          <li><a href="logout">Logout</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
