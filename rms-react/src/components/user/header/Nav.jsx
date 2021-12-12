import React from "react";
import logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="home-header-container-nav">
      <div className="home-header-container-nav-left">
        <div className="home-header-container-nav-left__branding">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="home-header-container-nav-right">
        <Link className="home-header-container-nav-right--active-menu" to="#">
          Home
        </Link>
        <Link to="#">Browse Job</Link>
        <Link to="#">Blog</Link>
        <Link to="#">Contact</Link>
        <Link to="#">Login</Link>
      </div>
    </div>
  );
};

export default Nav;
