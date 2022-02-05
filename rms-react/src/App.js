import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/user/Main";
import AllJobs from "./components/user/pages/AllJobs";
import Login from "./components/user/pages/authentication/Login";
import Contact from "./components/user/pages/Contact";

const App = () => {
  return (
    <>
      <Routes>
        <>
          <Route path="/" element={<Main />} />
          <Route path="/jobs" element={<AllJobs hero="jobs" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </>
      </Routes>
    </>
  );
};

export default App;
