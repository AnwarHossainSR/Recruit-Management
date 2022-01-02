import React from "react";
import Nav from "../../header/Nav";
import NavHero from "./NavHero";

const NavBar = ({ hero }) => {
  return (
    <header className="header">
      <div className="container">
        <Nav />
        <NavHero hero={hero} />
      </div>
    </header>
  );
};

export default NavBar;
