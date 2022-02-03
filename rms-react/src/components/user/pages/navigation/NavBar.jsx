import React from "react";
import Nav from "../../header/Nav";
import NavHero from "./NavHero";

const NavBar = ({ hero, cmp }) => {
  return (
    <header className="header">
      <div className="container">
        <Nav cmp={cmp} />
        <NavHero hero={hero} />
      </div>
    </header>
  );
};

export default NavBar;
