import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./navbar.css";

export const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="nav-container">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking.com</span>
        </Link>
        {user ? (
          <div>
            <span>{user.username}</span>
            <button className="nav-button">Logout</button>
          </div>
        ) : (
          <div className="nav-item">
            <button className="nav-button">Register</button>
            <button className="nav-button">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};
