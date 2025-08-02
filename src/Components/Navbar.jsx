import React from "react";
import '../Style/Navbar.css';
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

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
          <button
            className="bookbtn" onClick={() => navigate("/booknow")}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
