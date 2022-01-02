import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import Category from "./categories/Category";
import FeaturedJob from "./featured-jobs/FeaturedJob";
import Jobs from "./jobs/Jobs";
import Footer from "./footer/Footer";
import { fetchApiData } from "../../api/api";
import Loader from "../../services/Loader";

const Main = () => {
  const [loader, setLoader] = useState(true);
  const [data, setdata] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const response = await fetchApiData(`home`);
        if (response.status === true) {
          setdata(response.data);
        } else {
          console.log(response);
        }
        setLoader(false);
      };
      fetchData();
    }, 1000);
  }, []);
  console.log(data && data);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Category categories={data.categories} />
          <FeaturedJob featured={data.featured_job} />
          <Jobs latest={data.latest} />
          <Footer />
        </>
      )}
    </>
  );
};

export default Main;
