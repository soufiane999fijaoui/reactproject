import React from 'react';
import wlapeper from "../assets/wlapeper.jpg";

const Home = () => {
  return (
    <div 
      className="container-fluid p-0"
      style={{
        background: `url(${wlapeper}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
      }}
    >
      <div 
        className="text-center text-white" 
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.3)', 
          padding: '20px', 
          borderRadius: '15px'
        }}
      >
        <h1 className="display-4 fw-bold mb-3">Product Management Simplified</h1>
        <p className="lead mb-4">
          Découvrez notre plateforme intuitive qui facilite la gestion des  produits, optimise les processus et booste la collaboration de votre équipe.
        </p>
        <div>
          <a href="/signup" className="btn btn-dark btn-lg me-3">
            Get Started
          </a>
          <a href="/about" className="btn btn-outline-light btn-lg">
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
