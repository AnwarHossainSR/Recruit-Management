import React from "react";
import defaultImg from "../../../../assets/images/default.png";
import Search from "../../header/Search";

const NavHero = ({ hero }) => {
  return (
    <div className="hero_section">
      <>
        {hero === "jobs" || hero === "search" ? (
          <>
            <div className="title">
              <h1>Find Job</h1>
            </div>
            <div className="search_nav">
              <Search />
            </div>
          </>
        ) : hero === "contact" ||
          hero === "Login" ||
          hero === "Sign Up" ||
          hero === "Forgot Password" ? (
          <h1 className="title">{hero}</h1>
        ) : (
          <>
            <div className="hero-data">
              <div className="left">
                <div className="icon">
                  <img src={defaultImg} alt="icon" />
                </div>
                <div className="details">
                  <h1>Software Engineer</h1>
                  <div className="posted">
                    <div className="country">
                      <i className="fa fa-map-marker"></i>
                      <span>Brain Station 23, DHaka</span>
                    </div>
                    <div className="date">
                      <i className="fa fa-calendar"></i>
                      <span>Posted 2nd Feb, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="amount">
                  <h2>Monthly Salary</h2>
                  <h2>42000 TK</h2>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default NavHero;
