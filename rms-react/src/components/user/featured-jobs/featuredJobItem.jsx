import React from "react";
import icon from "../../../assets/images/default.png";
import { Link } from "react-router-dom";

const featuredJobItem = () => {
  return (
    <div className="featured_job--wrapper__card">
      <div className="featured_job--wrapper__card--left">
        <img src={icon} alt="icon" width="100px" height="100px" />
      </div>
      <div className="featured_job--wrapper__card--right">
        <h1>Engineer</h1>
        <p>Enosis Solution</p>
        <Link to="#" className="featured_job--wrapper__card--right__status">
          full time
        </Link>
      </div>
    </div>
  );
};

export default featuredJobItem;
