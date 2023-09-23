import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark cd ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Greenovate
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
          </Container>
  );
};

export default Navbar;
