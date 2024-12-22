import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import AddProduct from './pages/addProduct.jsx';
import UpdateProduct from './pages/UpdateProduct.jsx';
import Product from './pages/product.jsx';
import Logout from './pages/logout.jsx';
import Profile from './pages/profile.jsx';
import Signup from './pages/signup.jsx';
import PrivateComponent from './pages/PrivateComponnet.js';
import Login from './pages/login.jsx';
import Home from './pages/Home.jsx'; 
import Cart from './pages/cart.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
      
          <Route path="/" element={<Home />} />
          <Route element={<PrivateComponent />}>
            <Route path="/products" element={<Product />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/updateProduct/:id" element={<UpdateProduct />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
