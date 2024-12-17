import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import AddProduct from './pages/addProduct.jsx';
import UpdateProduct from './pages/updateProduct.jsx';
import Product from './pages/product.jsx';
import Logout from './pages/logout.jsx';
import Profile from './pages/profile.jsx';
import Footer from './components/footer.jsx';
import Signup from './pages/signup.jsx';
import PrivateComponent from './pages/PrivateComponnet.js';
import Login from './pages/login.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Product />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/updateProduct" element={<UpdateProduct />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
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
