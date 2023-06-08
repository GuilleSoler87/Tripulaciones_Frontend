import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Notification.scss";
import Footer from "../Footer/Footer";

const Notification = () => {
  const navigate = useNavigate();

  useEffect(() => {
  }, []);


  return (
    <>
      <h1>Notification</h1>
      <Footer />
    </>
  );
};

export default Notification;
