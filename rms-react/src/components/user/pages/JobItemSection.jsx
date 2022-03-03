import React from "react";
import FeaturedJobItem from "../featured-jobs/featuredJobItem";

const JobItemSection = ({ jobs }) => {
  return (
    <div className="featured_job">
      <div className="container">
        <div className="featured_job--wrapper">
          {jobs &&
            jobs.map((item, index) => (
              <FeaturedJobItem
                title={item.title}
                type={item.type}
                company={item.company}
                slug={item.slug}
                icon={item.icon}
              />
            ))}
        </div>
        <div className="load-data">
          <button className="button">Browse More</button>
        </div>
      </div>
    </div>
  );
};

export default JobItemSection;
