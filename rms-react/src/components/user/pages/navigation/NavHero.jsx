import React from "react";
import Search from "../../header/Search";

const NavHero = ({ hero, job }) => {
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
          job && (
            <>
              <div className="hero-data">
                <div className="left">
                  <div className="icon">
                    <img src={job.icon} alt="icon" />
                  </div>
                  <div className="details">
                    <h1>{job.title}</h1>
                    <div className="posted">
                      <div className="country">
                        <i className="fa fa-map-marker"></i>
                        <span>{job.company}</span>
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
                    <h2>{job.salary} TK</h2>
                  </div>
                </div>
              </div>
            </>
          )
        )}
      </>
    </div>
  );
};

export default NavHero;
