import React from "react";
import { Link } from "react-router-dom";

const JobItem = ({ title, slug, type, company, icon }) => {
  return (
    <div className="job__wrapper__card">
      <div className="job__wrapper__card--left">
        <img src={icon} alt="Icon" />
      </div>
      <div className="job__wrapper__card--line"></div>
      <div className="job__wrapper__card--right">
        <div className="job__wrapper__card--right__part-1">
          <h1>{title}</h1>
          <p>{company}</p>
          <Link
            className={type === "full time" ? "full-time" : "half-time"}
            to={`/job-details/${slug}`}
          >
            {type}E
          </Link>
        </div>
        <div className="job__wrapper__card--right__part-2">
          <i className="fa fa-heart-o"></i>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
