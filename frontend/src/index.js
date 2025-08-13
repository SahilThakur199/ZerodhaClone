import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Homepage from './Landingpage/home/Homepage';
import Signup from './Landingpage/signup/Signup';
import About from './Landingpage/about/AboutPage';
import Pricing from './Landingpage/pricing/PricingPage';
import Product from './Landingpage/products/ProductsPage';
import Support from './Landingpage/support/Support';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/About" element={<About />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Support" element={<Support />} />
    </Routes>
  </BrowserRouter>
);


