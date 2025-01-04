import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import loginlogo from '../assets/loginlogo.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, [navigate]);

  const collectData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:400/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      if (result?.name) {
        localStorage.setItem('user', JSON.stringify(result));
        Swal.fire({
          title: 'Success!',
          text: `Welcome, ${result.name}!`,
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          navigate('/');
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Incorrect login details. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="card shadow-lg rounded-4">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <img
                  src={loginlogo}
                  alt="Home Icon"
                  className="mb-3"
                  style={{ width: '50px', height: '50px' }}
                />
                
              </div>
              <form onSubmit={collectData}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button type="submit" className="btn btn-danger w-100">
                    login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
