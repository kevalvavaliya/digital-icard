import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.png" alt="" />
      </div>
      <div className="nav-title">
        <h3>Digital icard</h3>
      </div>
    </div>
  );
};

export default Navbar;
