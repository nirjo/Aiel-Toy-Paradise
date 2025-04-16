import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </section>
  );
};

export default Newsletter;
