import React from "react";
import Footer from "../../footer/Footer";
import NavBar from "../navigation/NavBar";
import SignUpItem from "./SignUpItem";

const SignUp = () => {
  return (
    <>
      <NavBar hero="Sign Up" cmp="auth" />
      <SignUpItem />
      <Footer />
    </>
  );
};

export default SignUp;
