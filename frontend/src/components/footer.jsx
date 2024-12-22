import React from 'react';

const Footer = () => {
  return (
    <footer
      className="bg-light text-dark py-3 shadow-sm"
      style={{ position: 'fixed', bottom: 0, width: '100%' }}
    >
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;
