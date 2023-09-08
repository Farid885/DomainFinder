import React from "react";
import "../assets/styles/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useLocation } from "react-router-dom";
import '../assets/styles/Bar.css'
const Header = () => {
  const location = useLocation();

  return (
    <div className={`p-4 ${location.pathname === "/" ? "bg-white" :  " colors pad-bar "}`}>
      <nav className="nav-bar">
        <div className="nav-deco">
          <NavLink to={"/"} className="navbar-brand">
            DOMAINFINDER
          </NavLink>

          <div>
            <ul>
              <li className="nav-item">
                <NavLink className="" activeClassName="active" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="" activeClassName="active" to="/details">
                  For Developers
                </NavLink>
                <NavLink className=""  style={{paddingLeft:'13px'}} activeClassName="active" to="/admin">
                Admin
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
