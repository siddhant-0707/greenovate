import React from "react";
import "./navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="container">
        <Link className="navbar-brand" href="#">
          Greenovate
        </Link>
        <ul className="nav-links">
          <li className="nav-item">
            <Link href="#" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
