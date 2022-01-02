import React, { useEffect, useState } from "react";
import Loader from "../../../services/Loader";
import NavBar from "./navigation/NavBar";

const AllJobs = ({hero}) => {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
  }, []);
  return (
    <>
      {(loader && <Loader />) || (
        <>
          <NavBar hero={hero} />
        </>
      )}
    </>
  );
};

export default AllJobs;
