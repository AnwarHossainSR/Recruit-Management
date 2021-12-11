import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/user/Main";

const App = () => {
  return (
    <>
      <Routes>
        <>
          <Route path="/" element={<Main />} />
        </>
      </Routes>
    </>
  );
};

export default App;
