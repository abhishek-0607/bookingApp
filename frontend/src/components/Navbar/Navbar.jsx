import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <span className="logo">Booking.com</span>
        <div className="nav-item">
          <button className="nav-button">Register</button>
          <button className="nav-button">Login</button>
        </div>
      </div>
    </div>
  );
};
