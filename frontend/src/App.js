import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import AddProduct from './pages/addProduct.jsx';
import UpdateProduct from './pages/updateProduct.jsx';
import Product from './pages/product.jsx';
import logout from './pages/logout.jsx';
import Profile from './pages/profile.jsx';
import Footer from './components/footer.jsx';
import Signup from './pages/signup.jsx';

const App = () => {
  return (
    <div>
       <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/UpdateProduct" element={<UpdateProduct />} />
        <Route path="/logout" element={<logout />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signup" element={<Signup />} />

        


      </Routes>
    </Router>
   
    <Footer/>

    </div>
   
   
  );
};

export default App;
