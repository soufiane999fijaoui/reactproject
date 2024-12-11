import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import AddProduct from './pages/addProduct.jsx';
import UpdateProduct from './pages/updateProduct.jsx';
import Product from './pages/product.jsx';
import logout from './pages/logout.jsx';
import Profile from './pages/profile.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/UpdateProduct" element={<UpdateProduct />} />
        <Route path="/logout" element={<logout />} />
        <Route path="/Profile" element={<Profile />} />
        


      </Routes>
    </Router>
  );
};

export default App;
