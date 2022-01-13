import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";

const Nav = () => {
  return (
    <div className="home-header-container-nav">
      <div className="home-header-container-nav-left">
        <div className="home-header-container-nav-left__branding">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="home-header-container-nav-right">
        <Link className="home-header-container-nav-right--active-menu" to="/">
          Home
        </Link>
        <Link to="/jobs">Browse Job</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Nav;
