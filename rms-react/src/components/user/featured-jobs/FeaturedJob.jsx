import React from "react";
import FeaturedJobItem from "./featuredJobItem";

const FeaturedJob = ({ featured, similar }) => {
  return (
    <div className="featured_job">
      <div className="container">
        <div className="featured_job-info">
          {similar && similar === true ? (
            <h1 className="featured_job-info__heading">Similar Job</h1>
          ) : (
            <>
              <h1 className="featured_job-info__heading">Featured Job</h1>
              <p className="featured_job-info__des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique excepturi quas voluptatum repellendus dolore sit.
              </p>
            </>
          )}
        </div>
        <div className="featured_job--wrapper">
          {featured &&
            featured.map((job, i) => (
              <FeaturedJobItem
                key={i}
                title={job.title}
                type={job.type}
                company={job.company}
                slug={job.slug}
                icon={job.icon}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
