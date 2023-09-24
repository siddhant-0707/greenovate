import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import "../../components/navbar/navbar.css";

const Navbar = () => {
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
            <Link to={`/dashboard`} className="nav-link">
              Home
            </Link>
          </li>

            <li className="nav-item">
              <Link to={`/dashboard/manage`} className="nav-link">
                Manage
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/dashboard/measure`} className="nav-link">
                Measure
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/dashboard/report`} className="nav-link">
                Report
              </Link>
            </li>
         

          <li className="nav-item">
            <button onClick={handleLogout} className="nav-link btn btn-link">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
