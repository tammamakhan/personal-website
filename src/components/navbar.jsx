import React from "react";

const NavBar = () => {
  return (
    <nav className="bar navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand clickable" style={{ marginLeft: "10px" }}>
        Tammam Khan
      </a>
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
          <a className="nav-item nav-link clickable">Projects</a>
          <a className="nav-item nav-link clickable">Education</a>
          <a className="nav-item nav-link clickable">About Me</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
