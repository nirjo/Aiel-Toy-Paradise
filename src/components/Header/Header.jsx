import React, { useContext } from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <h1>Aiel Toys Paradise</h1>
      <Link to="/cart" style={{ marginLeft: 'auto', color: 'white' }}>
        🛒 Cart ({totalItems})
      </Link>
    </header>
  );
};

export default Header;
