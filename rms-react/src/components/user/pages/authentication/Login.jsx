import React from "react";
import Footer from "../../footer/Footer";
import NavBar from "../navigation/NavBar";
import LoginItem from "./LoginItem";
const Login = () => {
  return (
    <>
      <NavBar hero="Login" cmp="auth" />
      <LoginItem />
      <Footer />
    </>
  );
};

export default Login;
