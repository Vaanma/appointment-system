import React from 'react';
import './Header.css';
import CuraSlotlogo from './CuraSlotlogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">
          <img src={CuraSlotlogo} alt="CuraSlot logo" />
        </div>
        <nav className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Doctorlist">Doctors</Link></li>
            <li><Link to="/Hospital">Hospital</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/AdminLogin">Admin Panel</Link></li>
          </ul>
        </nav>
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Signup">Signup</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
