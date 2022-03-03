import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApiData } from "../../../api/api";
import Loader from "../../../services/Loader";
import Footer from "../footer/Footer";
import NavBar from "../pages/navigation/NavBar";
import JobDetailsItem from "./JobDetailsItem";
const JobDetails = () => {
  const { slug } = useParams();
  const [loader, setloader] = useState(true);
  const [job, setjob] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchApiData(`home/${slug}`);
      if (response.status === true) {
        setjob(response.data);
      } else {
        console.log(response);
      }
    };
    fetchData();
    setTimeout(() => {
      setloader(false);
    }, 300);
  }, [slug]);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <NavBar job={job.job} cmp="jobs" />
          <JobDetailsItem similar={job.similar} job={job.job} />
          <Footer />
        </>
      )}
    </>
  );
};

export default JobDetails;
