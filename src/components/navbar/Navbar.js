import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  const handleDashboardClick = () => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark cd personal">
      {/* ... Your existing Navbar code ... */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={`/`} className="nav-link">
              Home
            </Link>
          </li>
          {!isAuthenticated && (
            <>
              <li className="nav-item">
                <Link to={`/login`} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/signup`} className="nav-link">
                  Signup
                </Link>
              </li>
            </>
          )}
          {isAuthenticated && (
            <li className="nav-item">
              <Link
                to={`/dashboard`}
                className="nav-link"
                onClick={handleDashboardClick}
              >
                Dashboard
              </Link>
            </li>
          )}
          {isAuthenticated && (
            <li className="nav-item">
              <button onClick={handleLogout} className="nav-link btn btn-link">
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
