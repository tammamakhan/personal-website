import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bar navbar navbar-expand-lg navbar-light bg-light">
      <Link
        className="navbar-brand clickable"
        to="/home"
        style={{ marginLeft: "10px" }}
      >
        Tammam Khan
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/education">
            Education
          </NavLink>
          <NavLink className="nav-item nav-link" to="/projects">
            Projects
          </NavLink>
          <NavLink className="nav-item nav-link" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
