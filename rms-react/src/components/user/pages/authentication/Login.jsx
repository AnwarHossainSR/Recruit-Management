import React, { useEffect, useState } from "react";
import Loader from "../../../../services/Loader";
import Footer from "../../footer/Footer";
import NavBar from "../navigation/NavBar";
import LoginItem from "./LoginItem";
const Login = () => {
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
          <NavBar hero="Login" cmp="auth" />
          <LoginItem />
          <Footer />
        </>
      )}
    </>
  );
};

export default Login;
