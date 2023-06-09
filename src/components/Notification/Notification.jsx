import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Notification.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Notification = () => {
  const navigate = useNavigate();

  useEffect(() => {
  }, []);


  return (
    <>
      <Header />
      <div className="notificationContainer">
        <h1>Notification</h1>
      </div>
      <Footer />
    </>
  );
};

export default Notification;
