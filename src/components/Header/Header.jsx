import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const { cartItems } = useCart();

  return (
    <header className="header">
      <img src={logo} alt="Aiel Toys Logo" className="logo" />
      <h1><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Aiel Toys Paradise</Link></h1>
      <Link to="/cart" className="cart-link">
        🛒 Cart ({cartItems.length})
      </Link>
    </header>
  );
};

export default Header;
