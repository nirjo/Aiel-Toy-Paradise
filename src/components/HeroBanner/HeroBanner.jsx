import React from 'react';
import './HeroBanner.css';
import heroBg from '../../assets/images/hero-bg.jpg';

const HeroBanner = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-content">
        <h2>Explore the Joy of Toys</h2>
        <p>Bright, fun, and perfect for every child</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
};

export default HeroBanner;
