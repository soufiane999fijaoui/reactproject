import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logosite from '../assets/logosite.png';

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow-lg"
      style={{
        backgroundColor: 'blue',
      }}
    >
      <div className="container">
        <Link className="navbar-brand text-light d-flex align-items-center" to="/">
          <img
            src={logosite}
            alt="Logo"
            style={{
              width: '40px',
              height: '40px',
              marginRight: '10px',
            }}
          />
        </Link>
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
            {auth ? (
              <li className="nav-item">
                <button
                  onClick={logout}
                  className="btn nav-link text-light bg-transparent border-0"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link text-light" to="/signup">Sign Up</Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link text-light" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/login">login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
