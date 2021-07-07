import React from 'react';

const Navbar = () => (
  <div>
    <nav className="navbar">
      <h1>the Hurley Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Post</a>
      </div>
    </nav>
  </div>
);

export default Navbar;
