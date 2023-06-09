import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
  }, []);


  return (
    <>
      <Header />
      <div className="homeContainer">
        <h1>Home</h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;
