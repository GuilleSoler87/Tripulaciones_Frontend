import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
  }, []);


  return (
    <>
      <h1>Home</h1>
      <Footer />
    </>
  );
};

export default Home;
