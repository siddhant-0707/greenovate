import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./navbar.css";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark cd personal">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Greenovate
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to={`/`} class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <Link to={`/login`} class="nav-link">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link to={`/signup`} class="nav-link">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link to={`/dashboard`} class="nav-link">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
