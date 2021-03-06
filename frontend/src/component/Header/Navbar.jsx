import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {

  return (
    <>
      <div className="navbar-div sticky-top">
        <nav
          className="navbar navbar-expand-lg navbar-light sticky-top" style={{ backgroundColor: "white", fontSize: "17px" }}
        >
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">
                        <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"/>
                    </a> */}
            <Link className="navbar-brand" to="/">
              <span style={{ color: "#e85510" }}>SOLUTION</span> <span style={{ color: "#3f3071" }}>FEST</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
              <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                <Link
                  className={`nav-link px-3`}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
                <Link className={`nav-link px-3`} to="/about">
                  About
                </Link>
                <Link className={`nav-link px-3`} to="/domain">
                  Domains
                </Link>
                <Link className={`nav-link px-3`} to="/timeline">
                  Timeline
                </Link>
                <Link className={`nav-link px-3`} to="/rounds">
                  Rounds
                </Link>
                <Link className={`nav-link px-3`} to="/results">
                  Results
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
