import React from "react";
import FeaturedJobItem from "./featuredJobItem";

const FeaturedJob = () => {
  return (
    <div className="featured_job">
      <div className="container">
        <div className="featured_job-info">
          <h1 className="featured_job-info__heading">Featured Job</h1>
          <p className="featured_job-info__des">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            excepturi quas voluptatum repellendus dolore sit.
          </p>
        </div>
        <div className="featured_job--wrapper">
          <FeaturedJobItem />
          <FeaturedJobItem />
          <FeaturedJobItem />
          <FeaturedJobItem />
          <FeaturedJobItem />
          <FeaturedJobItem />
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
