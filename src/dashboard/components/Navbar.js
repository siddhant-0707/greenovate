import React from "react";
import Button from '@mui/material/Button';
import { Outlet, Link } from "react-router-dom";

import "./navbar1.css";
const Navbar1 = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark cd ">
      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item">
            {/* <a class="nav-link active black-link" aria-current="page" href="#">
              Home
            </a> */}
            <Button>Home</Button>  
          </li>
          <li class="nav-item">
            <a class="nav-link black-link" href="#">
              Measure
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link black-link" href="#">
              Manage
            </a>
          </li>
          <li class="nav-item">
            <Link to={`dashboard`} class="nav-link black-link">
              Report
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar1;
