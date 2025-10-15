import React from "react";
import "./Footer.css";
import logo from '../assets/DGlogo.png';
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Not found" />
        </div>
        <nav className="footer-nav">
          <Link to="#">Company</Link>
          <Link to="#">Resources</Link>
          <Link to="#">Legal</Link>
          <Link to="/ContactUs">Contact</Link>
        </nav>
        <div className="footer-credit">
          &copy; {new Date().getFullYear()} Made with  DG AID PROJECT
        </div>
      </div>
    </footer>
  );
}
