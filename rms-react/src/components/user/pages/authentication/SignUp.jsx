import React, { useEffect, useState } from "react";
import Loader from "../../../../services/Loader";
import Footer from "../../footer/Footer";
import NavBar from "../navigation/NavBar";
import SignUpItem from "./SignUpItem";

const SignUp = () => {
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
          <NavBar hero="Sign Up" cmp="auth" />
          <SignUpItem />
          <Footer />
        </>
      )}
    </>
  );
};

export default SignUp;
