import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Navbar = ({ cartItemsCount = 0 }) => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const logout = () => {
    localStorage.clear();
    MySwal.fire({
      title: 'Logged Out',
      text: 'You have successfully logged out.',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      navigate('/signup');
    });
  };

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light shadow-sm" 
      style={{
        padding: '10px 20px', 
        backgroundColor: 'transparent', 
        borderRadius: '15px', 
        backdropFilter: 'blur(10px)', 
      }}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span>Product Management</span>
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
          <ul className="navbar-nav mx-auto align-items-center">
            <li className="nav-item mx-2">
              <Link className="nav-link d-flex align-items-center" to="/">
                <i className="bi bi-house-door-fill me-1"></i> Home
              </Link>
            </li>
            {auth && (
              <>
                <li className="nav-item mx-2">
                  <Link className="nav-link d-flex align-items-center" to="/products">
                    <i className="bi bi-box-seam-fill me-1"></i> Product
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link d-flex align-items-center" to="/addProduct">
                    <i className="bi bi-plus-circle-fill me-1"></i> Add Product
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item mx-2">
              <Link className="nav-link d-flex align-items-center" to="/profile">
                <i className="bi bi-person-circle me-1"></i> Profile
              </Link>
            </li>
            
            <li className="nav-item mx-2 position-relative">
              <Link className="nav-link d-flex align-items-center" to="/cart">
                <i className="bi bi-cart-fill fs-4"></i>
                {cartItemsCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: '0.75rem' }}
                  >
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </li>
            {auth ? (
              <li className="nav-item mx-2">
                <button
                  onClick={logout}
                  className="btn btn-dark rounded-pill px-3 py-2"
                  style={{ fontWeight: 'bold' }}
                >
                  Logout ({JSON.parse(auth).name})
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item mx-2">
                  <Link className="nav-link d-flex align-items-center" to="/signup">
                    <i className="bi bi-person-plus-fill me-1"></i> Sign Up
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="btn btn-dark rounded-pill px-3 py-2" to="/login" style={{ fontWeight: 'bold' }}>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
