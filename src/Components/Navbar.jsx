import React from "react";
import '../Style/Navbar.css';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <div className="nav">
           <div className="logo">
             Photographer
           </div>
          <div className="page">
            <NavLink to = "/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </div>
          <div className="page">
            <NavLink to = "/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </div>
          <div className="page">
            <NavLink to = "/collections" className={({ isActive }) => (isActive ? "active" : "")}>
              Collections
            </NavLink>
          </div>
          <div className="page">
            <NavLink to = "/booknow" className={({ isActive }) => (isActive ? "active" : "")}>
              BookNow
            </NavLink>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
