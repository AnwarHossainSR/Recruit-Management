import React from "react";
import JobItem from "./JobItem";

const Jobs = ({ latest }) => {
  return (
    <div className="job">
      <div className="container">
        <div className="job-info">
          <h1>Latest Jobs</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            animi unde architecto magni illo quis id illum aperiam magnam rem.
          </p>
        </div>
        <div className="job__wrapper">
          {latest &&
            latest.map((job, i) => (
              <JobItem
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

export default Jobs;
