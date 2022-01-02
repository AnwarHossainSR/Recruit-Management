import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/user/Main";
import AllJobs from "./components/user/pages/AllJobs";

const App = () => {
  return (
    <>
      <Routes>
        <>
          <Route path="/" element={<Main />} />
          <Route path="/jobs" element={<AllJobs hero="jobs" />} />
        </>
      </Routes>
    </>
  );
};

export default App;
