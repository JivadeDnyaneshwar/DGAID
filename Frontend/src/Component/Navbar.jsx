import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../assets/Dglogo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when link clicked
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Left side */}
      <div className="nav-left">
        <div className="nav-logo">
          <img src={logo} alt="not found" />
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={handleLinkClick}>HOME</Link></li>
          <li><Link to="/projects" onClick={handleLinkClick}>PROJECTS</Link></li>
          <li><Link to="#" onClick={handleLinkClick}>STUDENTS</Link></li>
          <li><Link to="/formproject" onClick={handleLinkClick} className="add_project">ADD PROJECTS</Link></li>
        </ul>
      </div>

      {/* Right side */}
      <div className="nav-right">
        <div className="search-box">
          <p className="icon"><IoIosSearch /></p>
          <input type="text" placeholder="Search" />
        </div>
        <Link to="/signup" className="login-btn">Registration</Link>
      </div>

      {/* Hamburger Icon */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
