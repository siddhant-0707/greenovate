import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import "./navbar.css";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark cd ">
      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Button color="secondary">
              <Link to={`/dashboard`}>Home</Link>
            </Button>
          </li>
          <li class="nav-item">
            <Button color="secondary">
              <Link to={`/dashboard/measure`}>Measure</Link>
            </Button>
          </li>
          <li class="nav-item">
            <Button color="secondary">
              <Link to={`/dashboard/manage`}>Manage</Link>
            </Button>
          </li>
          <li class="nav-item">
            <Button color="secondary">
              <Link to={`/dashboard/report`}>Report</Link>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
