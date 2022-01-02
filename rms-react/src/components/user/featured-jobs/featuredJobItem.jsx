import React from "react";
import { Link } from "react-router-dom";

const featuredJobItem = ({ title, slug, type, company, icon }) => {
  return (
    <div className="featured_job--wrapper__card">
      <div className="featured_job--wrapper__card--left">
        <img src={icon} alt="icon" width="100px" height="100px" />
      </div>
      <div className="featured_job--wrapper__card--right">
        <h1>{title}</h1>
        <p>{company}</p>
        <Link
          to={`/job-details/${slug}`}
          className={type === "full time" ? "full-time" : "half-time"}
        >
          {type}
        </Link>
      </div>
    </div>
  );
};

export default featuredJobItem;
