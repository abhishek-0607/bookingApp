import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking.com</span>
        </Link>
        <div className="nav-item">
          <button className="nav-button">Register</button>
          <button className="nav-button">Login</button>
        </div>
      </div>
    </div>
  );
};
