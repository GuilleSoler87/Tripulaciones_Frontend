import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contacts.scss";
import Footer from "../Footer/Footer";

const Contacts = () => {
  const navigate = useNavigate();

  useEffect(() => {
  }, []);


  return (
    <>
      <h1>Contacts</h1>
      <Footer />
    </>
  );
};

export default Contacts;
