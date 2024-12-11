import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary shadow-lg"
      style={{ backgroundColor: '#4CAF50' }} 
    >
      <div className="container">
        <Link className="navbar-brand text-light" to="/">MyApp</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/addProduct">Add Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/updateProduct">Update Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/logout">Logout</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
