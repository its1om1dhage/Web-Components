
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Templates", path: "/templates" }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Close mobile menu on desktop
      }
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkMode);
  }, [darkMode]);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(4px)',
      borderBottom: '1px solid #334155'
    }}>
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <div style={{
          fontSize: '20px',
          fontWeight: '600',
          color: 'white',
          cursor: 'pointer'
        }}>
          CompoNeeds
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '32px' 
          }}>
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  color: isActive ? '#60a5fa' : '#cbd5e1',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  padding: '8px 12px',
                  transition: 'color 0.2s ease',
                  borderRadius: '6px'
                })}
                onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                onMouseLeave={(e) => {
                  const isActive = e.target.getAttribute('aria-current') === 'page';
                  e.target.style.color = isActive ? '#60a5fa' : '#cbd5e1';
                }}
              >
                {link.name}
              </NavLink>
            ))}
            <button
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                backgroundColor: '#1e293b',
                color: '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#334155';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#1e293b';
                e.target.style.color = '#cbd5e1';
              }}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </div>
        )}

        {/* Mobile menu button */}
        {isMobile && (
          <button
            style={{
              padding: '8px',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '18px',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '6px',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#334155'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobile && menuOpen && (
        <div style={{
          backgroundColor: 'rgba(15, 23, 42, 0.98)',
          borderTop: '1px solid #334155',
          padding: '16px 20px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
        }}>
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                display: 'block',
                color: isActive ? '#60a5fa' : '#cbd5e1',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                padding: '12px 0',
                borderBottom: '1px solid #334155',
                transition: 'color 0.2s ease'
              })}
              onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
              onMouseLeave={(e) => {
                const isActive = e.target.getAttribute('aria-current') === 'page';
                e.target.style.color = isActive ? '#60a5fa' : '#cbd5e1';
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <div style={{ paddingTop: '16px', borderTop: '1px solid #334155', marginTop: '16px' }}>
            <button
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                backgroundColor: '#1e293b',
                color: '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                width: '100%',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#334155';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#1e293b';
                e.target.style.color = '#cbd5e1';
              }}
              onClick={() => {
                setDarkMode(!darkMode);
                setMenuOpen(false);
              }}
            >
              {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
