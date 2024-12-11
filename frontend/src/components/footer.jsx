import React from 'react';

const Footer = () => {
  return (
    <footer
      className="bg-primary text- py-4 shadow-lg"
      style={{ position: 'fixed', bottom: 0, width: '100%' }}
    >
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/about" className="text-light text-decoration-none">About Us</a>
          </li>
          <li className="list-inline-item">|</li>
          <li className="list-inline-item">
            <a href="/contact" className="text-light text-decoration-none">Contact</a>
          </li>
          <li className="list-inline-item">|</li>
          <li className="list-inline-item">
            <a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
