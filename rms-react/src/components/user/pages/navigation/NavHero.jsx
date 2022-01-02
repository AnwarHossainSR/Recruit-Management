import React from "react";
import Search from "../../header/Search";

const NavHero = ({ hero }) => {
  return (
    <div className="hero_section">
      <>
        <div className="title">Find Job</div>
        <div className="search_nav">
          <Search />
        </div>
      </>
    </div>
  );
};

export default NavHero;
