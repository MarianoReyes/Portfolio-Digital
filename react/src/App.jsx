import { Outlet, Link } from 'react-router-dom';
import './css/App.css';
import React from 'react';

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <Link to="/">About Me</Link>
          <Link to="/portfolio">Portfolio Digital</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
