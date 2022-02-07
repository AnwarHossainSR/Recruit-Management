import React, { useEffect, useState } from "react";
import Loader from "../../../services/Loader";
import Footer from "../footer/Footer";
import NavBar from "../pages/navigation/NavBar";
import JobDetailsItem from "./JobDetailsItem";
const JobDetails = () => {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 300);
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <NavBar cmp="jobs" />
          <JobDetailsItem />
          <Footer />
        </>
      )}
    </>
  );
};

export default JobDetails;
