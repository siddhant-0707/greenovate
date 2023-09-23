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
            {/* <a class="nav-link active black-link" aria-current="page" href="#">
              Home
            </a> */}
            <Button color="secondary">Home</Button>
          </li>
          <li class="nav-item">
            <Button color="secondary">Measure</Button>
          </li>
          <li class="nav-item">
            <Button color="secondary">Manage</Button>
          </li>
          <li class="nav-item">
            <Button color="secondary">Report</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
