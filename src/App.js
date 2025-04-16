import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
// import HeroBanner from './components/HeroBanner/HeroBanner';
// import ProductGrid from './components/ProductGrid/ProductGrid';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  );
}

export default App;
