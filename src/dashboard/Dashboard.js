import React from "react";

import Navbar from "./components/Navbar";
import Overall from "./components/Overall";

const Dashboard = () => { 
  const isAuthenticated = !!localStorage.getItem("token");
  if(!isAuthenticated) {
    window.location.href = "/login";
  }
  return (
    <>
      <Navbar />
      <Overall />
    </>
  );
};

export default Dashboard;
