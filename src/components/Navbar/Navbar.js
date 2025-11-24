import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo.png';

const AppNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="IEEE RGPV Logo" className="navbar-logo" />
          IEEE RGPV
        </Link>
        <button 
          className="navbar-icon" 
          onClick={toggleMenu} 
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          &#9776;
        </button>
        <ul className={`navbar-menu${menuOpen ? " active" : ""}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/group1" className="navbar-link" onClick={() => setMenuOpen(false)}>Team & Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/group2" className="navbar-link" onClick={() => setMenuOpen(false)}>Testimonials & FAQ</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AppNavbar;
