import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import React from "react";

function Navbar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <h4>Concert</h4>
        </div>
        <button
        className="navbar-toggler"
        type="button"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div
        className="collapse navbar-collapse mr-auto"
        id="navbarNav"
        style={{ float: "left" }}
        >
            <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
                <li className="nav-item">
                <NavLink to={"/signup"} className="nav-link">
                    Signup
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to={"/login"} className="nav-link">
                    Login
                </NavLink>
                </li>
            </ul>
        </div>
    </nav>;
}

export default Navbar;