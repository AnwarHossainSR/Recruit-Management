import React from "react";
import { Link } from "react-router-dom";
import FeaturedJob from "../featured-jobs/FeaturedJob";
const JobDetailsItem = ({ job, similar }) => {
  return (
    <section className="details_info">
      <div className="container">
        <div className="row">
          <div className="left">
            <h1>Job Description</h1>
            <div>{job && job.description}</div>
            <Link className="button" to="/">
              Apply Job
            </Link>
          </div>
          <div className="right">
            <h1>Job Location</h1>
            <div className="location-map">Map will be rendered here</div>
          </div>
        </div>
        <FeaturedJob featured={similar} similar={true} />
      </div>
    </section>
  );
};

export default JobDetailsItem;
