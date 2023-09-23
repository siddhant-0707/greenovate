import React from "react";
import css from"./navbar.module.css";
import { Button, Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <Container fluid className={`${css.navbar} p-0`}>
    <nav  className="navbar navbar-expand-lg navbar-dark" style={{padding:"2rem 25rem 0"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span style={{fontWeight:"800"}}>
            Greenovate
            </span>
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
            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                Login
              </a> */}
              <Button variant="warning">Login</Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
          </Container>
  );
};

export default Navbar;
