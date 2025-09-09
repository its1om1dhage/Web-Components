

import React, { useState } from "react";
import '../Style/Navbar.css';
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Templates", path: "/templates" }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    document.body.classList.toggle('dark-theme', darkMode);
  }, [darkMode]);

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo" tabIndex={0} aria-label="Photographer Home">
          CompoNeeds
        </div>
        <button
          className={`menu-toggle${menuOpen ? ' open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          {navLinks.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              className="theme-toggle"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
