import React, { useEffect, useState } from "react";
import { fetchApiData } from "../../api/api";
import Loader from "../../services/Loader";
import Category from "./categories/Category";
import FeaturedJob from "./featured-jobs/FeaturedJob";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Jobs from "./jobs/Jobs";

const Main = () => {
  const [loader, setLoader] = useState(true);
  const [data, setdata] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const response = await fetchApiData(`home`);
        if (response && response.status && response.status === true) {
          setdata(response.data);
        } else {
          console.log(response);
        }
        setLoader(false);
      };
      fetchData();
    }, 100);
  }, [loader]);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Header cmp="home" />
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
