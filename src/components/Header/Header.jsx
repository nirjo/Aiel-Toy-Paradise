import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Aiel Toys Logo" className="logo" />
      <h1>Aiel Toys Paradise</h1>
    </header>
  );
};

export default Header;
