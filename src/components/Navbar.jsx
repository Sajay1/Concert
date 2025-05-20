import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import React from "react";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="mx-auto text-white font-bold text-2xl">
                Concert
            </div>
                <div className="nav-items ">
                        <NavLink to="/signup" className="nav-item">
                        Home
                    </NavLink>
                    <NavLink to="/signup" className="nav-item">
                        Signup
                    </NavLink>
                    <NavLink to="/login" className="nav-item">
                        Login
                    </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;