import React, { useEffect, useState } from "react";
import Loader from "../../../services/Loader";
import Footer from "../footer/Footer";
import ContactForm from "./ContactForm";
import NavBar from "./navigation/NavBar";

const Contact = () => {
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
          <NavBar hero="contact" cmp="contact" />
          <ContactForm />
          <Footer />
        </>
      )}
    </>
  );
};

export default Contact;
